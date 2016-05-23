import React from 'react-native';
import Main from './App/Components/Main';

const {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} = React;

class HusslnMobile extends Component {
  render() {
    return (
      <NavigatorIOS
        ref="nav"
        style={styles.container}
        barTintColor='white'
        shadowHidden={true}
        titleTextColor='#C0C0C0'
        initialRoute={{
          title: 'Hustlin',
          component: Main
        }} />
    );
  }
}

const styles = StyleSheet.create({
 container:{
    flex: 1,
  },
});

AppRegistry.registerComponent('HusslnMobile', () => HusslnMobile);
