import { Stack } from 'expo-router';
import { I18nManager } from 'react-native';

export default function RootLayout() {
  I18nManager.allowRTL(false);
  I18nManager.forceRTL(false);
  
  return (
    <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },
    }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="article" options={{ title: 'Article' }} />
    </Stack>
  );
}
