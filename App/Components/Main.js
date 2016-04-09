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
        <View style={styles.content}>
          <Text style={styles.data}>{data.name} @{data.standard_start_time}</Text>
        </View>
        <Image style={styles.image}
          source={{uri: 'https://www.bart.gov/sites/all/themes/bart_desktop/img/system-map.gif'}} />
      </View>
    );
  }
}
