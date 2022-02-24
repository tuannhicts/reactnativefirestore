import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../config/NavigationConfig';

const NotesScreen = () => {
  const [data, setData] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    const handleNotes = firestore()
      .collection('notes')
      .onSnapshot(querySnapshot => {
        const notes = [];
        querySnapshot.forEach(documentSnapshot =>
          notes.push({...documentSnapshot.data(), key: documentSnapshot.id}),
        );
        setData(notes);
      });
    //cleanup
    return () => handleNotes();
  }, []);

  const navigateScreens = useCallback(
    item => {
      return navigation.navigate(Screens.Sentences, {item: item});
    },
    [navigation],
  );

  const renderItem = useCallback(item => {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{item.item.title}</Text>
        </View>
        <Pressable onPress={navigateScreens}>
          <Text style={styles.owner}>{item.item.owner}</Text>
        </Pressable>
      </View>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <FlatList
      data={data || []}
      renderItem={renderItem}
      style={styles.flatList}
    />
  );
};
const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: 'green',
  },
  owner: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#000000',
  },
});
export default NotesScreen;
