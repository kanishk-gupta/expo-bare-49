import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import styles from './LoadingStyle';
import { View } from '../../components/themed';
import { useTheme } from '@rneui/themed';

const LoadingScreen = () => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color={theme.colors.tertiary} />
    </View>
  );
};

export default LoadingScreen;


