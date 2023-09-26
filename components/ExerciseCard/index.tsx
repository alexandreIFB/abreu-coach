import { Exercise } from '../../constants/training_mock';
import { Text } from '../Text';
import { CardContainer } from './styles';


type ExerciseCardProps = {
  exercise: Exercise
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <CardContainer>
      <Text weight='600' size={18}>{exercise.name}</Text>
      <Text size={14} color='#000' style={{marginTop: 4}}>{exercise.description}</Text>
      <Text size={12} color='#000'>Equipamento: {exercise.equipment}</Text>
      <Text size={12} color='#000'>Obs: {exercise.notes}</Text>
    </CardContainer>
  );
}
