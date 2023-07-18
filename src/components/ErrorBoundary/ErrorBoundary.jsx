import * as React from 'react';
// import { View } from 'react-native';
import { Text } from "@rneui/themed";
import * as Updates from 'expo-updates';

import { View, ThemedButton, ScrollView } from '../themed'
import i18n from '../../i18n';
import styles from './ErrorBoundaryStyle';


export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			error: '',
			errorInfo: ''
		};
	}


	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		this.setState({ error, errorInfo });
	};

	handleReload = async () => {
		try {
			await Updates.reloadAsync();
		} catch (error) {
			console.log("ERROR in handleReload : ", error);
		}
	};

	render() {
		if (this.props.catchErrors && this.state.hasError) {			
			// You can render any custom fallback UI
			return (
				<ScrollView contentContainerStyle={styles.container}>
					<Text h4>{i18n.t('error_title')}</Text>
					<Text style={styles.errorDesc}>Error: { this.state.error?.toString() }</Text>
					<Text>Error Info: { JSON.stringify(this.state.errorInfo) }</Text>
					{/* <Button  onPress={this.handleReload}>{i18n.t('go_back')}</Button> */}
					<ThemedButton buttonStyle={styles.backBtn} onPress={this.handleReload}>{i18n.t('go_back')}</ThemedButton>
				</ScrollView>
			);
		}

		return this.props.children; 
	}
}