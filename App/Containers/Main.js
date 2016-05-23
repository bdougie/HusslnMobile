import React from 'react-native';
import Events from '../Containers/Events';

const {
  PropTypes,
  StyleSheet,
  Text,
  View
} = React;

export default class Main extends React.Component {
  static propTypes = {
    navigator: PropTypes.object,
  };

  render() {
    const {events} = this.props;

    return (
      <View style={styles.container}>
        <Events data={events} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
  },
});
