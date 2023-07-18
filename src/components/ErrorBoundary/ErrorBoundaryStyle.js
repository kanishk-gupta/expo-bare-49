import { StyleSheet } from 'react-native';

import { spacing } from '../../theme';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: spacing(2),
	},
	errorDesc: {
		textAlign: 'center',
		paddingVertical: spacing(4),
	},
	backBtn: {
		marginTop: spacing(2),
	}
});

export default styles;