import * as React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useTheme } from '@rneui/themed';

const ThemedView = ({ style, backgroundColor = 'background' , ...otherProps }) => {
  const { theme } = useTheme();
  return <View style={[{ backgroundColor: theme.colors[backgroundColor] }, style]} {...otherProps} />;
};

ThemedView.propTypes = {
  style: PropTypes.any,
  backgroundColor: PropTypes.string
};

export default ThemedView;