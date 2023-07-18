import { COLORS } from '../constants/Colors';
import { createTheme } from '@rneui/themed';


const theme = createTheme({
	lightColors: {
		// background: COLORS.LIGHT.BACKGROUND,
		tertiary: COLORS.LIGHT.APP_TERTIARY,
		// primary: COLORS.LIGHT.APP_PRIMARY,
		// appPrimary: COLORS.LIGHT.APP_PRIMARY,
		// secondary: COLORS.LIGHT.APP_SECONDARY,
		// text: COLORS.LIGHT.TEXT,
		// grayBackground: COLORS.LIGHT.GRAY_BACKGROUND
	},
	darkColors: {
		tertiary: COLORS.DARK.APP_TERTIARY,
	},
});

/**
 * Calculate the space based on unit system
 * 
 * @param {number} value 
 * @returns {number}
 */
const spacing = (value) => {
	value = value || 1;
	return value * 8;
};

export { theme, spacing };