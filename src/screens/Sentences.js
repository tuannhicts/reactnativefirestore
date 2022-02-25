import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useRoute} from '@react-navigation/native';

const Sentences = () => {
  const [sentences, setSentences] = useState();
  const route = useRoute();
  const {id} = route.params;
  useEffect(() => {
    const senten = firestore()
      .collection('notes')
      .doc(id)
      .collection('sentences')
      .onSnapshot(querySnapshot => {
        const nodeSen = [];
        querySnapshot.forEach(documentSnapshot =>
          nodeSen.push({...documentSnapshot.data(), key: documentSnapshot.id}),
        );
        setSentences(nodeSen);
      });

    //cleanup
    return () => senten();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderItem = useCallback(item => {
    console.log('item==>', item);
    return (
      <View style={styles.content}>
        <View>
          <Text style={styles.styleSpeaker}>{item?.item?.speaker}</Text>
        </View>
        <View>
          <Text style={styles.styleText}>{item?.item?.text}</Text>
        </View>
      </View>
    );
  }, []);
  const emtyElement = useCallback(() => {
    return (
      <View style={styles.contentEmty}>
        <Text>No sentences in here!</Text>
      </View>
    );
  }, []);
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  return (
    <FlatList
      data={sentences || []}
      renderItem={renderItem}
      ListEmptyComponent={emtyElement}
      keyExtractor={keyExtractor}
    />
  );
};

export default Sentences;
const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  styleSpeaker: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 17,
  },
  styleText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 13,
  },
  contentEmty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
});
