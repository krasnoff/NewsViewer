import { Text, View, StyleSheet, Button } from 'react-native';
 import { Link } from 'expo-router'; 
import useGetData from '../hooks/useGetData';
import { useEffect } from 'react';
import { Articles } from '../interfaces/NewsData';

export default function Index() {
    const { data, error, loading, refetch } = useGetData('top-headlines?language=en');

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
      console.log('data:', data);
    }, [data]);

    useEffect(() => {
      console.log('error message:', error);
    }, [error]);

    useEffect(() => {
      console.log('loading:', loading);
    }, [loading]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home screen</Text>
            <Link href="/about" style={styles.button}>
                Go to About screen
            </Link>
            <Button onPress={refetch} title="Press" color="#fff" />
            {data && data.articles && data.articles.map((item: Articles, index: number) => 
                <div key={index} style={styles.text}>{item.author}</div>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
