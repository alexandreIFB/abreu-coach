import { FlatList } from 'react-native';
import { TrainingPlan } from '../../constants/training_mock';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TrainingCard } from '../TrainingCard';
import { DivisionView } from '../DivisionView';
import { AddIconFixed } from '../AddIconFixed';


type TabTrainingProps = {
  trainingList: TrainingPlan[]
  setShowPlan: React.Dispatch<React.SetStateAction<TrainingPlan | null>>
  showPlan: TrainingPlan | null
}


export function TabTraining({trainingList, setShowPlan, showPlan}: TabTrainingProps) {
  return (
    (<>
      {
        !showPlan  && (
          <>
            <FlatList
              data={trainingList}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity  onPress={() => {
                  setShowPlan(item);
                }}>
                  <TrainingCard
                    trainingData={item}
                  />
                </TouchableOpacity>
              )}
              contentContainerStyle={{padding: 10, gap: 12}}
              showsVerticalScrollIndicator={false}
            />
            <AddIconFixed />
          </>
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
    </>)
  );
}
