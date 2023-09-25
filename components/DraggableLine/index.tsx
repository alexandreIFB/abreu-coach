import { DraggableLineContainer, Indicator, Line } from './styles';

type DraggableLineProps = {
  isClosed: boolean
  handleTouch(): void
}

export function DraggableLine({isClosed, handleTouch}: DraggableLineProps){
  function rendeIsOpen() {
    return (
      <>
        <Line />
        <Indicator />
      </>
    );
  }

  function rendeIsClosed() {
    return (
      <>
        <Indicator />
        <Line />
      </>
    );
  }

  return (
    <DraggableLineContainer onPress={() => handleTouch()}>
      {isClosed ? rendeIsClosed() : rendeIsOpen()}
    </DraggableLineContainer>
  );
}

