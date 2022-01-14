import React from 'react';
import {
  FlatList,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';

export const FishesScreen = ({navigation}) => {
  const pressHandler = item => {
    console.log(item);
    navigation.navigate('FishDetail', {
      speciesName: item,
    });
  };
  const [loading, setLoading] = useState(true);
  const [fishData, setFishData] = useState([]);

  useEffect(() => {
    axios.get('https://www.fishwatch.gov/api/species').then(res => {
      setFishData(res.data), setLoading(false);
    });
  }, []);

  const renderItem = ({item}) => {
    return (
      <>
        {loading && (
          <View>
            <Text style={styles.load}>Loading...</Text>
          </View>
        )}
        {fishData && (
          <>
            <View style={styles.container}>
              <View style={styles.frame}>
                <Image
                  source={{uri: item['Species Illustration Photo'].src}}
                  style={styles.fishImage}
                />
                <Pressable onPress={() => pressHandler(item['Species Name'])}>
                  <Text style={styles.fishTitle}>{item['Species Name']}</Text>
                </Pressable>
              </View>
            </View>
          </>
        )}
      </>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={fishData}
        renderItem={renderItem}
        keyExtractor={item => item['Species Name']}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd8ad',
  },
  frame: {
    borderRadius: 20,
    padding: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    marginVertical: 10,
    borderColor: '#8b8c8b',
  },
  fishImage: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
  fishTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8b8c8b',
  },
});
