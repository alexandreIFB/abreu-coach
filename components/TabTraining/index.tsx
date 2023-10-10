import { FlatList } from 'react-native';
import { TrainingPlan } from '../../constants/training_mock';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TrainingCard } from '../TrainingCard';
import { DivisionView } from '../DivisionView';


type TabTrainingProps = {
  trainingList: TrainingPlan[]
  handlePlanChange(state: TrainingPlan | null): void
  showPlan: TrainingPlan | null
}


export function TabTraining({trainingList, handlePlanChange, showPlan}: TabTrainingProps) {
  return (
    (<>
      {
        !showPlan  && (
          <FlatList
            data={trainingList}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity  onPress={() => {
                handlePlanChange(item);
              }}>
                <TrainingCard
                  trainingData={item}
                />
              </TouchableOpacity>
            )}
            contentContainerStyle={{padding: 10, gap: 12}}
            showsVerticalScrollIndicator={false}
          />
        )
      }
      {showPlan && (
        <DivisionView
          plan={showPlan}
          onBackPress={() => {
            handlePlanChange(null);
          }}
        />
      )}
    </>)
  );
}
