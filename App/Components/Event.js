import React from 'react-native';
import moment from 'moment';

const {
  StyleSheet,
  Text,
  View
} = React;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#48BBEC',
    marginBottom: 10,
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

const Event = ({event}) => {
  const start = moment(event.start_time, 'YYYYMMDD').fromNow();

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{event.name}</Text>
      <Text style={styles.time}>@{event.standard_start_time}</Text>
      <Text style={styles.moment}>{start}</Text>
    </View>
  );
};

Event.propTypes = {event: React.PropTypes.object};

export default Event;

