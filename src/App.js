import { Container, Content, Row } from "./styles";
import Input from "./components/Input/index";
import Button from "./components/Button/index";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");
  const [expression, setExpression] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setExpression("")
    setOperation("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setExpression(`${currentNumber} +`);
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setExpression(`${firstNumber} + ${currentNumber}`);
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setExpression(`${currentNumber} -`);
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setExpression(`${firstNumber} - ${currentNumber}`);
      setOperation("");
    }
  };

const handleMultNumbers = () => {
  if(firstNumber === "0"){
    setFirstNumber(String(currentNumber));
      setExpression(`${currentNumber} x`);
      setCurrentNumber("0");
      setOperation("x");
  }else{
    const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setExpression(`${firstNumber} x ${currentNumber}`);
      setOperation("");
  }
}

const handleDivideNumbers = () => {
  if(firstNumber === "0"){
    setFirstNumber(String(currentNumber));
      setExpression(`${currentNumber} x`);
      setCurrentNumber("0");
      setOperation("÷");
  }else{
    const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setExpression(`${firstNumber} ÷ ${currentNumber}`);
      setOperation("");
  }
}

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      setExpression(`${firstNumber} ${operation} ${currentNumber} = `);
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
          case "x":
          handleMultNumbers();
          break;
          case "÷":
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <p
          style={{
            color: "#888",
            fontSize: "18px",
            textAlign: "left",
            paddingLeft: 10,
            paddingTop: 10,
            background: "#caacd7"
          }}
        >
          {expression}
        </p>

        <Input value={currentNumber} />
        
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="x" onClick={handleMultNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="C"  onClick={handleOnClear}/>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="÷" onClick={handleDivideNumbers}/>
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
