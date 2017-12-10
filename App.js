import React, { Component } from 'react';
import { Container, Header, Content, Body, Title,List, ListItem, Text, Icon, Right, Left} from 'native-base';
import {HashTags} from './components';
import {
  StackNavigator,
} from 'react-navigation';



class Categories extends Component {
  static navigationOptions = {
    title: 'Categories',
    headerStyle: {
      backgroundColor: 'black',
      
    },
    headerTintColor: '#fff',
  };
  render() {
    
    const { navigate } = this.props.navigation;
    return (
      <Container>
      
        <Content>
        <List style={{ flex: 1, backgroundColor: '#fff' }}>

                        <ListItem button onPress={() =>navigate('HashTags') }>
                        
                            <Text>Simons Mignolet</Text>
                            <Right style={styles.right}>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem button>
                            <Text>Nathaniel Clyne</Text>
                            <Right style={styles.right}>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem button>
                            <Text>Dejan Lovren</Text>
                            <Right style={styles.right}>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
        </Content>
      </Container>
    );
  }
}
const InstaHashes = StackNavigator({
  Home: { screen: Categories },
  HashTags: { screen: HashTags }
});

export default class App extends React.Component {
  render() {
    return <InstaHashes />;
  }
}
const styles = {
    header:{
      backgroundColor:'black'
    },
    right:{
      flex:1,
      justifyContent: 'flex-end',

  }

};