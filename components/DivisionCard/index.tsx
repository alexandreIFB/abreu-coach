import React, { useState } from 'react';
import { TrainingDivision } from '../../constants/training_mock';
import { Container, ContainerExpand, RowExpand, RowInfo } from './styles';
import { Text } from '../Text';
import { MaterialIcons } from '@expo/vector-icons';

type DivisionCardProps = {
  divisionData: TrainingDivision
}

export function DivisionCard({ divisionData }: DivisionCardProps){
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container  onPress={toggleExpand}>
      <Text weight='600'>{divisionData.name}</Text>
      <RowInfo>
        <Text weight='400' size={14}>Exercícios: {divisionData.exercises.length}</Text>
      </RowInfo>
      {isExpanded && (
        <ContainerExpand>
          <Text>Exercícios da Divisão</Text>
          {divisionData.exercises.map((exercise, index) => (
            <Text key={index}>{exercise.name}</Text>
          ))}
        </ContainerExpand>
      )}
      <RowExpand>
        <MaterialIcons name={isExpanded ? 'expand-less' :  'expand-more'} size={32} color='#888'/>
      </RowExpand>
    </Container>
  );
}
