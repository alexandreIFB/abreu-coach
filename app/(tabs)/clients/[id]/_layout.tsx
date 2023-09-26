import {  useLocalSearchParams } from 'expo-router';
import { View } from '../../../../components/View';
import { clientList } from '../../../../constants/clients_mock';
import { ClientProfileHeader } from '../../../../components/ClientProfileHeader';
import { NavBar } from '../../../../components/NavBar';
import { useState, useCallback } from 'react';
import {BackHandler} from 'react-native';
import { TabTraining } from '../../../../components/TabTraining';
import { TrainingPlan, trainingList } from '../../../../constants/training_mock';
import { useFocusEffect } from 'expo-router';

export default function ClientProfile() {
  const [showPlan, setShowPlan] = useState<TrainingPlan | null>(null);
  const [isClosed, setIsClosed] = useState(false);


  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Treino', 'Dieta', 'Protocolo'];

  const handleClosedHeader = () => {
    setIsClosed(prev => !prev);
  };

  const handlePlanChange = (state: TrainingPlan | null) => {
    setShowPlan(state);
    setIsClosed(!!state);
  };

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const { id } = useLocalSearchParams();

  const user = clientList.find((client) => client.id === id);

  if(!user){
    return;
  }

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (showPlan) {
          handlePlanChange(null);
          return true;
        } else {
          return false;
        }
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => subscription.remove();
    }, [showPlan, handlePlanChange])
  );

  return (
    <View>
      <ClientProfileHeader client={user}isClosed={isClosed} handleClosedHeader={handleClosedHeader} />
      <NavBar tabs={tabs} activeTab={activeTab} onChangeTab={handleTabChange} />
      {
        activeTab === 0 && (
          <TabTraining
            trainingList={trainingList}
            handlePlanChange={handlePlanChange}
            showPlan={showPlan}
          />
        )
      }
    </View>
  );
}
