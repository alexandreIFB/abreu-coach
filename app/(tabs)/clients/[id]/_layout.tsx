import {  useLocalSearchParams } from 'expo-router';
import { View } from '../../../../components/View';
import { clientList } from '../../../../constants/clients_mock';
import { ClientProfileHeader } from '../../../../components/ClientProfileHeader';
import { NavBar } from '../../../../components/NavBar';
import { useState } from 'react';
import { TrainingCard } from '../../../../components/TrainingCard';
import {  TrainingPlan, trainingList } from '../../../../constants/training_mock';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DivisionView } from '../../../../components/DivisionView';

export default function ClientProfile() {
  const [activeTab, setActiveTab] = useState(0);
  const [showPlan, setShowPlan] = useState<TrainingPlan | null>(null);

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
        !showPlan && (
          <FlatList
            data={trainingList}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => {
                setShowPlan(item);
              }}>
                <TrainingCard
                  trainingData={item}
                />
              </TouchableOpacity>
            )}
            contentContainerStyle={{padding: 10, gap: 12}}
          />
        )
      }
      {showPlan && (
        <DivisionView
          plan={showPlan}
          onBackPress={() => {
            setShowPlan(null);
          }}
        />
      )}
    </View>
  );
}
