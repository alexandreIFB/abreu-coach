import { View } from 'react-native';
import { TrainingPlan } from '../../constants/training_mock';
import { Text } from '../Text';
import { BackButton, Container, DescribeContainer, HeaderContainer, TitleContainer } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { formatDate } from '../../app/helpers/formatDate';



type DivisionViewProps = {
  plan: TrainingPlan
  onBackPress() : void
}

export function DivisionView({plan, onBackPress}: DivisionViewProps){
  // const [showDivisions, setShowDivisions] = useState(false);
  // const [showExercises, setShowExercises] = useState(false);

  // const toggleDivisions = () => {
  //   setShowDivisions(!showDivisions);
  //   // Certifique-se de definir showExercises como false quando você expandir as divisões
  //   setShowExercises(false);
  // };


  return (
    <Container>
      <HeaderContainer>
        <TitleContainer>
          <BackButton onPress={onBackPress}>
            <FontAwesome name='arrow-left' />
          </BackButton>
          <Text weight='700'>{plan.name}</Text>
          <View />
        </TitleContainer>
        <DescribeContainer>
          <Text weight='700'>Início: <Text>{formatDate(plan.startDate)}</Text></Text>
          <Text weight='700'>Expiração: <Text>{formatDate(plan.expirationDate)}</Text></Text>
        </DescribeContainer>
      </HeaderContainer>
    </Container>
  );
}
