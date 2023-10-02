import { useState } from 'react';
import Form from "./Form";
import Container from "./Container";
import Header from "./Header";
import { currencies } from './currencies';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled';

function App() {

  const [result, setResult] = useState(null);

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Currency converter" />
        <Form
          result={result}
          calculateResult={calculateResult}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
