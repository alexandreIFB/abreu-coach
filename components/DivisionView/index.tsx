import { View } from 'react-native';
import { TrainingPlan } from '../../constants/training_mock';
import { Text } from '../Text';
import { BackButton, Container, DescribeContainer,  HeaderContainer, TitleContainer } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { formatDate } from '../../app/helpers/formatDate';
import { FlatList } from 'react-native-gesture-handler';
import { DivisionCard } from '../DivisionCard';
import { extractIsExpired } from '../../app/helpers/extractIsExpired';
import { extractPassTime } from '../../app/helpers/extractPassTime';

type DivisionViewProps = {
  plan: TrainingPlan
  onBackPress() : void
}

export function DivisionView({plan, onBackPress}: DivisionViewProps){
  const isExpired = extractIsExpired(plan.expirationDate);

  const daysPass = extractPassTime(plan.startDate, plan.expirationDate);

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
          <Text>
            <FontAwesome name={isExpired ? 'calendar-times-o' : 'calendar-o'} size={16}/>
            {`  ${formatDate(plan.startDate)} a ${formatDate(plan.expirationDate)} (${daysPass} dias)`}
          </Text>
        </DescribeContainer>
      </HeaderContainer>
      <FlatList
        data={plan.divisions}
        style={{ width: '100%' }}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <DivisionCard
            divisionData={item}
          />
        )}
        contentContainerStyle={{padding: 10, gap: 12}}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
