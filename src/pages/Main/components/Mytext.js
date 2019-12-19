/*Custom Text*/
import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
const Mytext = props => {
  return <Text style={styles.text}>{props.text}</Text>;
};
const styles = StyleSheet.create({
  text: {
    color: '#111825',
    fontSize: 23,
    marginTop: 16,
    marginLeft: 135,
    marginRight: 135,
  },
});
export default Mytext;