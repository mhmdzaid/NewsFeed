import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useDisplayMode } from '../Contexts/DisplayModeContext';

 const LoadingSpinner = () => {
  const {colors,mode} = useDisplayMode()
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.textColor} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1
    },
  });

  export default LoadingSpinner;