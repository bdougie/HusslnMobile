import React from 'react-native';
import api from '../Lib/Api'
import Event from '../Components/Event';
import Transmit from "react-transmit-native";

const {
  ListView,
  PropTypes,
  StyleSheet,
  Text,
  View
} = React;

class Events extends React.Component {
  constructor(props){
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      isLoading: true,
      empty: false,
      error: '',
    }
  }

  static propTypes = {
    events: PropTypes.array,
  };

  render() {
    const {events} = this.props;
    const data = this.ds.cloneWithRows(events);

    return (
      <View style={styles.container}>
        <ListView
          dataSource={data}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }

  renderRow(rowData) {
    return (
      <View style={styles.header}>
        <Event event={rowData} />
      </View>
    );
  }
}

export default Transmit.createContainer(Events, {
  initialVariables: {},
  fragments: {
    events() {
      return  api.getEventData()
      .then((events) => events)
      .catch((err) => console.log(`error: ${err}`));
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


