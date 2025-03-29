import { Stack } from 'expo-router';
import React from 'react';
import { I18nManager } from 'react-native';
// import StorybookUIRoot from '../storybook/index';

function RootLayout() {
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

let AppEntryPoint = RootLayout;

// if (__DEV__ && process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true') {
//   AppEntryPoint = () => {
//     return <StorybookUIRoot />;
//   }
// }

export default AppEntryPoint;
