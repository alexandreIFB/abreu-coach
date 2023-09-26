import React from 'react';
import { TrainingDivision } from '../../constants/training_mock';
import { Container } from './styles';
import { Text } from '../Text';

type DivisionCardProps = {
  divisonData: TrainingDivision
}

export function DivisionCard({ divisonData }: DivisionCardProps){


  return (
    <Container>
      <Text weight='600'>{divisonData.name}</Text>
      {/* <RowInfo>
        <Text weight='400'>{trainingData.description}</Text>
        <Text number>
          <FontAwesome name={isExpired ? 'calendar-times-o' : 'calendar-o'} size={16}/>
          {` ${formatDate(trainingData.startDate)} a ${formatDate(trainingData.expirationDate)}`}
        </Text>
      </RowInfo> */}
    </Container>
  );
}
