import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Body, Title, Icon, Right} from 'native-base';
export default class ListExample extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header} androidStatusBarColor="black">
        <Body>
            <Title>Categories</Title>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem button>
              
              <Text>Simon Mignolet</Text>
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

const styles = {
    header:{
      backgroundColor:'black'
    },
    right:{
      flex:1,
      justifyContent: 'flex-end',
     
    }
    
}