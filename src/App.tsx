import Timeline from './components/Timeline/Timeline';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1 style={{ textAlign: 'center' }}>Timeline component react</h1>
      <Timeline />
    </>
  );
};

export default App;
