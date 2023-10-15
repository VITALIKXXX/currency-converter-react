import Form from "./Form";
import Container from "./Container";
import Header from "./Header";
import { ThemeProvider } from 'styled-components';
import { theme } from './styled';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Currency converter" />
        <Form
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;

