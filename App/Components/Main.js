import React from 'react-native';
import api from '../Lib/Api'

const {
  Image,
  PropTypes,
  StyleSheet,
  Text,
  View
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
  },
  data: {
    padding: 40,
    flex: 4,
    fontSize: 20,
    textAlign: 'center',
  },
  footer: {
    padding: 50,
    backgroundColor: 'red',
  },
  header: {
    padding: 50,
    backgroundColor: '#DCDCDC',
  },
  image: {
    flex: 5,
  },
  text: {
    flex: 2,
    flexDirection: 'row',
    textAlign: 'center',
  },
});

export default class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: {},
    }
  }

  static propTypes = {
    navigator: PropTypes.object,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    api.getEventData()
    .then((res) => {
      this.setState({
        data: res[0],
      })
    })
    .catch((err) => console.log(`error: ${err}`));
  }

  render() {
    const {data} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Event Notifications</Text>
        </View>
        <Text style={styles.data}>{data.name} @{data.standard_start_time}</Text>
        <Image style={styles.image}
          source={{uri: ''}} />
        <View style={styles.footer} />
      </View>
    );
  }
}
