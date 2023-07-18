import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme, Input } from '@rneui/themed';
import { StyleSheet } from 'react-native';

import { spacing } from '../../theme';

const ThemedInput = ({ style, containerStyle, inputRef, ...otherProps }) => {
	// const { theme } = useTheme();
	const styles = useStyles();

	return <Input ref={inputRef} containerStyle={[styles.container, containerStyle]} inputContainerStyle={[styles.inputContainer, style]} {...otherProps} />;
};

const useStyles = () => {
	const { theme } = useTheme();

	return StyleSheet.create({
		container: {
			paddingHorizontal: 0,
		},
		inputContainer: {
			borderWidth: 1,
			borderRadius: spacing(1),
			paddingHorizontal: spacing(1),
			paddingVertical: spacing(0.5),
			borderColor: theme.colors.grey4,
		},
	})
};


ThemedInput.propTypes = {
	style: PropTypes.any,
	inputRef: PropTypes.any
};

export default ThemedInput;