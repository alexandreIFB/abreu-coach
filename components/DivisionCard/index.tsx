import React, { useState } from 'react';
import { TrainingDivision } from '../../constants/training_mock';
import { Container, ContainerExpand, ContainerHeader, RowExpand } from './styles';
import { Text } from '../Text';
import { MaterialIcons } from '@expo/vector-icons';
import { ExerciseCard } from '../ExerciseCard';

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
      <ContainerHeader>
        <Text weight='600'>{divisionData.name}</Text>
        <Text weight='400' size={14}>Exercícios: {divisionData.exercises.length}</Text>
      </ContainerHeader>
      {isExpanded && (
        <ContainerExpand>
          {divisionData.exercises.map((exercise, index) => (
            <ExerciseCard
              key={index}
              exercise={exercise}
            />
          ))}
        </ContainerExpand>
      )}
      <RowExpand>
        <MaterialIcons name={isExpanded ? 'expand-less' :  'expand-more'} size={32} color='#888'/>
      </RowExpand>
    </Container>
  );
}
