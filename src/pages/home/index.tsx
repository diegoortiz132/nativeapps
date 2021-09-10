import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMovies} from '../../redux/actions/movies';

import {
  SafeAreaView,
  ScrollView,
  Text,
  ActivityIndicator,
  View,
  Image,
} from 'react-native';

import {Box, Titulo, boxImage, Row} from './style';

const Home = () => {
  const data = useSelector(state => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const renderData = () => {
    return data.map(({Title, Year, Type, Poster}, key) => {
      return (
        <View style={Box} key={key}>
          <View style={Row}>
            <Text>{Title}</Text>
            <Text>{Year}</Text>
            <Text>{Type}</Text>
          </View>
          <View style={Row}>
            <Image source={{uri: Poster}} style={boxImage} />
          </View>
        </View>
      );
    });
  };
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={Titulo}>Movies</Text>
        {
          data
            ?renderData()
            :<ActivityIndicator size="large" color="#0000ff" />
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
