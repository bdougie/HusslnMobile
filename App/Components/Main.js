import React from 'react-native';
import api from '../Lib/Api'
import moment from 'moment';
import Transmit from "react-transmit-native";

const {
  PropTypes,
  StyleSheet,
  Text,
  View
} = React;

class Main extends React.Component {
  static propTypes = {
    events: PropTypes.array,
    navigator: PropTypes.object,
  };

  render() {
    const {events} = this.props;
    const start = moment(events[0].start_time, 'YYYYMMDD').fromNow();

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>{events[0].name}</Text>
          <Text style={styles.time}>{start}</Text>
        </View>
      </View>
    );
  }
}

export default Transmit.createContainer(Main, {
  initialVariables: {},
  fragments: {
    events() {
      return  api.getEventData()
      .then((data) => data)
      .catch((err) => console.log(`error: ${err}`));
    }
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
  },
  content: {
    padding: 50,
  },
  data: {
    flex: 4,
    fontSize: 20,
    textAlign: 'center',
  },
  footer: {
    padding: 50,
    backgroundColor: 'red',
  },
  header: {
    backgroundColor: '#48BBEC',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    padding: 50,
  },
  image: {
    flex: 6,
    marginBottom: 0,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 2,
    flexDirection: 'row',
    textAlign: 'center',
  },
  time: {
    fontSize: 15,
    flex: 2,
    flexDirection: 'row',
    fontStyle: 'italic',
    marginTop: 10,
    textAlign: 'center',
  },
});

