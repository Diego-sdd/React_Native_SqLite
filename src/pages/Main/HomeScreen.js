/*Home Screen With buttons to navigate to different options*/
import React from 'react';
import { View, StyleSheet, Image, Dimensions, ImageBackground, } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }
  render() {
    return (
      <ImageBackground
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
      }}
      style={styles.container}
      resizeMode="cover"
    > 
        <Image
          source={{
            uri: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-apple-praised-after-new-product-reveal-investor-32.png',
          }}
          style={styles.logo}

        />
        <View style={styles.collun}>

          <Mytext text="Relátorio"  />
          <Mybutton
            title="Cadastrar"
            customClick={() => this.props.navigation.navigate('Register')}
          />
          <Mybutton
            title="Alterar"
            customClick={() => this.props.navigation.navigate('Update')}
          />
          <Mybutton
            title="Visualizar Usuário"
            customClick={() => this.props.navigation.navigate('View')}
          />
          <Mybutton
            title="Visualizar Todos"
            customClick={() => this.props.navigation.navigate('ViewAll')}
          />
          <Mybutton
            title="Excluir"
            customClick={() => this.props.navigation.navigate('Delete')}
          />
        </View>
    
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
 
  collun: {
    marginTop: 0,
  },
  logo: {
    marginLeft:0,
    height: Dimensions.get('window').height * 0.15,
    marginVertical: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').height * 0.10 * (1450 / 1302),
  },
  
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  titlehome:{
    marginLeft:50
  }
});