import { SafeAreaView, StatusBar } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </SafeAreaView>
  );
}

export default App;
