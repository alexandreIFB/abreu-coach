import {  useLocalSearchParams } from 'expo-router';
import { View } from '../../../../components/View';
import { clientList } from '../../../../constants/clients_mock';
import { ClientProfileHeader } from '../../../../components/ClientProfileHeader';
import { NavBar } from '../../../../components/NavBar';
import { useState } from 'react';
import { TabTraining } from '../../../../components/TabTraining';
import { TrainingPlan, trainingList } from '../../../../constants/training_mock';

export default function ClientProfile() {
  const [showPlan, setShowPlan] = useState<TrainingPlan | null>(null);

  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Treino', 'Dieta', 'Protocolo'];

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const { id } = useLocalSearchParams();

  const user = clientList.find((client) => client.id === id);

  if(!user){
    return;
  }

  return (
    <View>
      <ClientProfileHeader client={user} />
      <NavBar tabs={tabs} activeTab={activeTab} onChangeTab={handleTabChange} />
      {
        activeTab === 0 && (
          <TabTraining
            trainingList={trainingList}
            setShowPlan={setShowPlan}
            showPlan={showPlan}
          />
        )
      }
    </View>
  );
}
