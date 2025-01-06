import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './Home';


export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}