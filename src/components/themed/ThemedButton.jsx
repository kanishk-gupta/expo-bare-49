import * as React from 'react';
// import PropTypes from 'prop-types';
import { Button, ButtonProps } from "@rneui/themed";

import { spacing } from '../../theme';

const ThemedButton = ({ buttonStyle, ...rest }) => {
	// const { theme } = useTheme();
	return (
		<Button buttonStyle={[{ borderRadius: spacing(1) }, buttonStyle]} {...rest} />
	)
};

ThemedButton.propTypes = ButtonProps;

export default ThemedButton;