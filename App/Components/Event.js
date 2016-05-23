import React from 'react-native';
import moment from 'moment';

const {
  PropTypes,
  StyleSheet,
  Text,
  View
} = React;

export default class Event extends React.Component {
  static propTypes = {
    event: PropTypes.object,
  };

  render() {
    const {event} = this.props;
    const start = moment(event.start_time, 'YYYYMMDD').fromNow();

    console.log(event)
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{event.name}</Text>
        <Text style={styles.time}>@{event.standard_start_time}</Text>
        <Text style={styles.moment}>{start}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#48BBEC',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    padding: 50,
  },
  moment: {
    color: 'white',
    fontSize: 12,
    flex: 2,
    flexDirection: 'row',
    fontStyle: 'italic',
    marginTop: 10,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
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
