import { Link, Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { View } from '../../../../components/View';
import { ClientProfileHeader } from '../../../../components/ClientProfileHeader';
import { NavBar } from '../../../../components/NavBar';
import { useState, useCallback, useEffect } from 'react';
import { BackHandler, TouchableOpacity } from 'react-native';
import { TabTraining } from '../../../../components/TabTraining';
import { TrainingPlan } from '../../../../constants/training_mock';
import { useFocusEffect } from 'expo-router';
import { AddIconFixed } from '../../../../components/AddIconFixed';
import { useClient } from '../../../../contexts/ClientContext';
import axios from 'axios';

export default function ClientProfileHome() {
  const {client} = useClient();
  const [showPlan, setShowPlan] = useState<TrainingPlan | null>(null);
  const [isClosed, setIsClosed] = useState(false);
  const [plans, setPlans] = useState<TrainingPlan[]>([]);
  const navigationx = useNavigation();

  const [isFocused, setIsFocused] = useState(false);


  useEffect(() => {
    navigationx.addListener('focus', () => {
      setIsFocused(true);
    });
    navigationx.addListener('blur', () => {
      setIsFocused(false);
    });


  }, []);





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

  const user = client;

  if(!user){
    return <Redirect href="/clients" />;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://coach-app-api.alexandreabreus.repl.co/trainingplan/${user._id}`);
        setPlans(response.data);
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchData();
  }, [isFocused]);

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
            trainingList={plans}
            handlePlanChange={handlePlanChange}
            showPlan={showPlan}
          />
        )
      }
      <Link href={`/clients/${id}/newTrainingForm`} asChild>
        <TouchableOpacity>
          <AddIconFixed />
        </TouchableOpacity>
      </Link>
    </View>
  );
}
