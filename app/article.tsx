import { useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet, Platform } from 'react-native';
import WebView from 'react-native-webview';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function ArticleScreen() {
  const { url } = useLocalSearchParams<{ url: string }>();
  
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor='#f4511e'
        style='light'
      />
      {Platform.OS === "android" ? <WebView
        originWhitelist={['*']}
        style={styles.container2}
        source={{ uri: url }}
      /> : null}
      {Platform.OS === "web" ? 
        <Text><a href={url} target="_blank">Go To Article</a></Text>
      : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    
  },
  text: {
    color: '#000',
  },
});
