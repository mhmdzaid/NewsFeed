import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

 const LoadingSpinner = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.aggresiveCardBGColor} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default LoadingSpinner;