import { FontAwesome } from '@expo/vector-icons';
import { Client } from '../../constants/clients_mock';
import { AvataImage } from '../AvataImage';
import { Text } from '../Text';
import { ButtonsContainer, ButtonsIcon, Container, ContainerMinimal } from './styles';
import { DraggableLine } from '../DraggableLine';
import { Linking } from 'react-native';


type ClientProfileHeaderProps = {
  client: Client
  isClosed: boolean
  handleClosedHeader(): void
}

export function ClientProfileHeader({client, isClosed, handleClosedHeader}: ClientProfileHeaderProps){
  function renderMinimal() {
    return (
      <ContainerMinimal>
        <Text size={18} weight='700'>{client.name}</Text>
        <Text size={14}>{client.age} anos | {client.gender}</Text>
      </ContainerMinimal>
    );
  }

  function renderDefault() {
    return (
      <Container>
        <AvataImage url={client.profileImage || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} size={60}/>
        <Text size={24} weight='700'>{client.name}</Text>
        <Text size={16}>{client.age} anos | {client.gender}</Text>
        <ButtonsContainer >
          <ButtonsIcon onPress={() =>
            Linking.canOpenURL('whatsapp://send?text=oi').then(supported => {
              if (supported) {
                return Linking.openURL(
                  `whatsapp://send?phone=${client.phoneNumber}&text=Olá, sua nova dieta está em seu email!`
                );
              } else {
                return Linking.openURL(
                  `https://api.whatsapp.com/send?phone=${client.phoneNumber}&text=Olá, sua nova dieta está em seu email!`
                );
              }
            })
          }>
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
      <DraggableLine isClosed={isClosed} handleTouch={() => handleClosedHeader()}/>
    </>
  );
}
