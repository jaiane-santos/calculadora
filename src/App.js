import { Container, Content, Row } from "./styles";
import Input from "./components/Input/index";
import Button from "./components/Button/index";

function App() {
  return (
    <Container>
      <Content>
        <Input />
         <Row>
          <Button label="x"/>
          <Button label="/"/>
          <Button label="c" />
          <Button label="."/>
        </Row>
        <Row>
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="X" />
        </Row>
        <Row>
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="-" />
        </Row>
        <Row>
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="+" />
        </Row>
         <Row>
          <Button label="+/-" />
          <Button label="0" />
          <Button label="," />
          <Button label="=" />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
