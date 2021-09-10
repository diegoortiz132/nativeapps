import {TextStyle, ViewStyle, ImageStyle} from 'react-native';

export const Titulo: TextStyle = {
  fontSize: 25,
  textAlign: 'center',
};

export const Box: ViewStyle = {
  borderWidth: 0.1,
  borderColor: 'white',
  borderRadius: 15,
  marginTop: 20,
  marginLeft: 10,
  marginRight: 10,
  padding: 15,
  shadowColor: '#000',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.25,
  shadowRadius: 4.6,
  elevation: 1,
  flexDirection: 'row',
};

export const boxImage: ImageStyle = {
  width: 100,
  height: 100,
};
export const Row: ViewStyle = {
  width: '50%',
  alignItems: 'center',
  justifyContent: 'center',
};
