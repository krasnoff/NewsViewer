import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
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
            <ScrollView>
            {data && data.articles && data.articles.map((item: Articles, index: number) => 
                <div key={index} style={styles.itemContainer}>{item.author}</div>
            )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
    width: '100%'
  },
  itemContainer: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
    flex: 1
  },
  text: {
    color: '#000000',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000000',
  },
});
