import { Text, View, StyleSheet, Button, ScrollView, Image, Linking, RefreshControl } from 'react-native';
 import { Link } from 'expo-router'; 
import useGetData from '../hooks/useGetData';
import { useCallback, useEffect, useState } from 'react';
import { Articles } from '../interfaces/NewsData';
import React from 'react';

export default function Index() {
    const { data, error, loading, refetch } = useGetData('top-headlines?language=en');
    const [refreshing, setRefreshing] = useState<boolean>(false);

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
      setRefreshing(false);
    }, [data]);

    useEffect(() => {
      console.log('error message:', error);
      setRefreshing(false);
    }, [error]);

    useEffect(() => {
      //console.log('loading:', loading);
    }, [loading]);

    const onRefresh = useCallback(() => {
      setRefreshing(true);
      refetch();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.allItems}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> 
            }>
                {data && data.articles && data.articles.map((item: Articles, index: number) => 
                    <View key={index} style={styles.itemContainer}>
                        <View style={styles.flexDirectionRow}>
                            <View style={[styles.flexDirectionColumn, styles.flexImage]}>
                                <Image style={styles.tinyLogo} source={{
                                    uri: item.urlToImage,
                                }} />
                                <Text style={styles.fontBold}>{item.author}</Text>
                            </View>
                            <View style={[styles.flexDirectionColumn, styles.flexText]}>
                                <Text style={styles.fontBold}>{item.title}</Text>
                                <Text>{new Date(item.publishedAt).toLocaleDateString("en-US")}</Text>
                                <Text>{item.description}</Text>
                            </View>
                        </View>
                        <View style={styles.goToArticle}><Link href={`/article?url=${encodeURIComponent(item.url)}`}>Go to Article</Link></View>
                    </View>
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
  allItems: {
    width: '100%',
    padding: 10
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
    flex: 1,
    flexBasis: 'auto',
    marginBottom: 20,
    padding: 10
  },
  tinyLogo: {
    width: '100%',
    // Without height undefined it won't work
    height: undefined,
    // figure out your image aspect ratio
    aspectRatio: 135 / 76,
  },
  flexDirectionColumn: {
    flexDirection: 'column',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  flexText: {
    flex: 3,
    paddingLeft: 10
  },
  flexImage: {
    flex: 1
  },
  fontBold: {
    fontWeight: '700'
  },
  goToArticle: {
    alignItems: 'flex-end'
  }
});
