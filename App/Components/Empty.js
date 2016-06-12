import React from 'react-native';

const {
  StyleSheet,
  Text,
  View
} = React;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#545454',
    marginBottom: 10,
    padding: 50,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontStyle: 'italic',
    flex: 2,
    flexDirection: 'row',
    textAlign: 'center',
  },
});

const Empty = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>No Events Today</Text>
    </View>
  );
};

export default Empty;
