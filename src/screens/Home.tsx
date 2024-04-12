
import * as React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import Card from '../components/Card'


const Home = () => {
    const posts = [
        {
          id: "1",
          avatar: "https://source.unsplash.com/random",
          username: "rafael",
          content: "loren ipsum",
          image: "https://source.unsplash.com/random",
          likes: 10,
          reposts: 50,
          comments: 100,
        },
        {
          id: "2",
          avatar: "https://source.unsplash.com/random",
          username: "fulano",
          content: "loren ipsum ipsum",
          image: "https://source.unsplash.com/random",
          likes: 1,
          reposts: 5,
          comments: 10,
        },
        {
          id: "3",
          avatar: "https://source.unsplash.com/random",
          username: "ciclano",
          content: "loren ipsum ipsum",
          image: "https://source.unsplash.com/random",
          likes: 1,
          reposts: 5,
          comments: 10,
        },
      ];

    return (
      <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({item}) => <Card item={item}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#06202F',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home