import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';

import Home from './src/telas/Home';

export default function App() {
  return (
    <SafeAreaView>
      <Home/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
