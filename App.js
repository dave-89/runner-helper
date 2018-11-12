import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: {
        x: 0,
        y: 0
      }
    }
    this.showPosition = this.showPosition.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      throw new Error("Geolocation not available :(");
    }
  }

  showPosition(position) {
    const newState = this.state;
    newState.location.x = position.coords.latitude;
    newState.location.y = position.coords.longitude;
    this.setState(newState);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.getLocation}
          title="New Location"
        />
        <Text>{this.state.location.x}</Text>
        <Text>{this.state.location.y}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
