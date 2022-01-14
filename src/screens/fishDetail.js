import React, {useState} from 'react';
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import {useEffect} from 'react';
import axios from 'axios';

export const FishDetail = props => {
  const [fish, setFish] = useState();
  const [loading, setLoading] = useState(true);
  const speciesName = props.route.params.speciesName;
  const searchName = speciesName.replace(' ', '-');
  console.log(searchName);

  useEffect(() => {
    axios
      .get(`https://www.fishwatch.gov/api/species/${searchName}`)
      .then(res => {
        console.log(res.data[0]), setFish(res.data), setLoading(false);
      });
  }, []);
  return (
    <>
      {loading && (
        <View>
          <Text style={styles.load}>Loading...</Text>
        </View>
      )}
      {fish && (
        <ScrollView style={{backgroundColor: '#ffd8ad'}}>
          <View style={styles.container}>
            <Image
              source={{uri: fish[0]['Species Illustration Photo'].src}}
              style={{
                width: '100%',
                height: 100,
                resizeMode: 'contain',
                marginVertical: 5,
              }}
            />

            <Text style={styles.name}>{fish[0]['Species Name']}</Text>
            <Text style={styles.description}>
              {fish[0]['Biology'].replace(/<[^>]*>/g, '')}
            </Text>
            <Text>{fish[0]['Source'].replace(/<[^>]*>/g, '')}</Text>
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd8ad',
    height: '100%',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  description: {
    padding: 15,
  },
  load: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
