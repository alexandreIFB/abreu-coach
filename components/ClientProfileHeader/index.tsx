import { FontAwesome } from '@expo/vector-icons';
import { Client } from '../../constants/clients_mock';
import { AvataImage } from '../AvataImage';
import { Text } from '../Text';
import { ButtonsContainer, ButtonsIcon, Container, ContainerMinimal } from './styles';
import { useState } from 'react';
import { DraggableLine } from '../DraggableLine';


type ClientProfileHeaderProps = {
  client: Client
}

export function ClientProfileHeader({client}: ClientProfileHeaderProps){
  const [isClosed, setisClosed] = useState(false);

  function renderMinimal() {
    return (
      <ContainerMinimal>
        <Text size={24} weight='700'>{client.name}</Text>
        <Text size={16}>{client.age} anos | {client.gender}</Text>
      </ContainerMinimal>
    );
  }

  function renderDefault() {
    return (
      <Container>
        <AvataImage url={client.profileImage || ''} size={60}/>
        <Text size={24} weight='700'>{client.name}</Text>
        <Text size={16}>{client.age} anos | {client.gender}</Text>
        <ButtonsContainer>
          <ButtonsIcon>
            <FontAwesome size={18} name='phone' color='#5167f9'/>
          </ButtonsIcon>
          <ButtonsIcon>
            <FontAwesome size={18} name='question-circle-o' color='#5167f9'/>
          </ButtonsIcon>
        </ButtonsContainer>
      </Container>
    );
  }

  return (
    <>
      {
        isClosed ? renderMinimal() : renderDefault()
      }
      <DraggableLine isClosed={isClosed} handleTouch={() => setisClosed(prev => !prev)}/>
    </>
  );
}
