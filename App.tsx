import { SafeAreaView, StatusBar } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </>
  );
}

export default App;
