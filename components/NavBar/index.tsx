import { Container, TabButton, TabText } from './styles';

interface NavBarProps {
  tabs: string[];
  activeTab: number;
  onChangeTab: (index: number) => void;
}
export function NavBar({ tabs, activeTab, onChangeTab }: NavBarProps){
  return (
    <Container>
      {tabs.map((tab, index) => (
        <TabButton
          key={index}
          active={index === activeTab}
          onPress={() => onChangeTab(index)}
        >
          <TabText active={index === activeTab}>{tab}</TabText>
        </TabButton>
      ))}
    </Container>
  );
}
