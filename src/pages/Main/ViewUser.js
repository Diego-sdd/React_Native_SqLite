/*Screen to view single user*/
import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' }); 
export default class ViewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_user_id: '',
      userData: '',
    };
  }
  searchUser = () => {
    const { input_user_id } = this.state;
    console.log(this.state.input_user_id);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [input_user_id],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            this.setState({
              userData: results.rows.item(0),
            });
          } else {
            alert('No user found');
            this.setState({
              userData: '',
            });
          }
        }
      );
    });
  };
  render() {
    return (
      <ImageBackground
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
      }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.collun}>
        <Mytextinput
          placeholder="Digite o Id"
          onChangeText={input_user_id => this.setState({ input_user_id })}
          style={{ padding:10 }}
        />
        <Mybutton
          title="Pesquisar"
          customClick={this.searchUser.bind(this)}
        />
        <View style={styles.visualizar} >
          <Text>Identificação: {this.state.userData.user_id}</Text>
          <Text>Nome: {this.state.userData.user_name}</Text>
          <Text>Contato: {this.state.userData.user_contact}</Text>
          <Text>Menssage: {this.state.userData.user_address}</Text>
        </View>
        </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  collun: {
    marginTop: 200,
    width: 400
  },
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  visualizar:{
    marginLeft: 35, marginRight: 35, marginTop: 10, backgroundColor:"rgba(30, 29, 29,0.2)",padding:10
  }
});