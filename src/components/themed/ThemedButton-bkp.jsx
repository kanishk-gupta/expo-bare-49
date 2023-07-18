import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, useTheme } from "@rneui/themed";
import { TouchableOpacity, StyleSheet, ActivityIndicator, } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';

import { spacing } from '../../theme';

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	themedBtn: {
		borderRadius: spacing(3),
		textAlign: 'center',
		textAlignVertical: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		padding: spacing(1.5),
	},
	themedBtnText: {
		fontSize: spacing(2),
		fontWeight: 'bold',
	},
});

const ThemedButton = ({ style, text, onPress, disabled = false, loading = false }) => {
	const { theme } = useTheme();

	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.5} style={[styles.container, style]} disabled={disabled || loading}>
			<LinearGradient
				colors={(disabled || loading) ? [theme.colors.grey3, theme.colors.grey4] : ['#4ED2A5', '#5DABF8']}
				start={{ x: 0.2, y: 1 }}
				end={{ x: 1, y: 0.2 }}
				{...deg(2)}
				style={styles.themedBtn}>
				{loading ? <ActivityIndicator color={theme.colors.white} /> : (
					<Text style={[styles.themedBtnText, { color: theme.colors.background }]}>{text}</Text>
				)}
			</LinearGradient>
		</TouchableOpacity>
	)
};

ThemedButton.propTypes = {
	style: PropTypes.object,
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
};

export default ThemedButton;