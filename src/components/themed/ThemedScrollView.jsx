import * as React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, ScrollViewProps } from 'react-native';
import { useTheme } from '@rneui/themed';

const ThemedScrollView = ({ style, ...otherProps }) => {
  const { theme } = useTheme();
  return <ScrollView style={[{ backgroundColor: theme.colors.background, flex: 1 }, style]} {...otherProps} />;
};

ThemedScrollView.propTypes = {
  style: PropTypes.object,
  ...ScrollViewProps
};

export default ThemedScrollView;