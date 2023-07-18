import { StyleSheet, Dimensions } from 'react-native';
import { spacing } from '../../theme';
import { useTheme } from "@rneui/themed";

const windowHeight = Dimensions.get('window').height;

const useStyles = () => {
	const { theme } = useTheme();

	return StyleSheet.create({
		slider: {
			backgroundColor: 'red',
		},
		sliderContainer: {
			height: '100%',
		},
		content: {
			// backgroundColor: theme.colors.background,
			// height: windowHeight > 600 ? '85%' : '77%',
			height: '85%',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
		image: {
			width: '75%',
			height: undefined,
			aspectRatio: 0.8,
			resizeMode: 'contain',
		},
		dot: {
			backgroundColor: theme.colors.primary
		},
		activeDot: {
			backgroundColor: '#B87DFF',
		},
		textContainer: {
			textAlign: 'center',
			width: '100%',
		},
		title: {
			paddingTop: spacing(1),
			textAlign: 'center',
			fontSize: 19,
			paddingTop: spacing(1),
			fontWeight: '500',
			fontWeight: 'bold',
		},
		subtitle: {
			paddingTop: spacing(0.5),
			textAlign: 'center',
			fontSize: 15,
		},
		btnTitleStyle: {
			color: '#000',
		},
		sliderButtons: {
			fontSize: 16,
			marginTop: spacing(0.5),
			marginHorizontal: '10%',
			borderRadius: spacing(3),
		},
		themedBtn: {
			borderRadius: spacing(3),
			marginHorizontal: '10%',
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
		errorMsg: {
			color: theme.colors.error,
			textAlign: 'center',
			fontWeight: 'bold',
		}
	})
};

export default useStyles;