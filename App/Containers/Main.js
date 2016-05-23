import React from 'react-native';
import Events from '../Containers/Events';

const {
  StyleSheet,
  View
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
  },
});

const Main = () => (
  <View style={styles.container}>
    <Events />
  </View>
);

export default Main;
