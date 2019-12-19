/*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View, ImageBackground, StyleSheet } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' }); 
export default class ViewAllUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp,
        });
      });
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
    );
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
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.user_id} style={{backgroundColor:"rgba(30, 29, 29,0.2)", padding: 20, marginTop:1 }}>
              <Text>Identicação: {item.user_id}</Text>
              <Text>Nome: {item.user_name}</Text>
              <Text>Contato: {item.user_contact}</Text>
              <Text>Mensagem: {item.user_address}</Text>
            </View>
          )}
        />
      </View>
       </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
 
  collun: {
    marginTop: 20,
    width:390
  },
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
});