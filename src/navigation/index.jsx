import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Appearance } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useThemeMode, Text } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { increment, authAction } from "../redux/reducers/authSlice";
import { navigationRef } from '../services/navigationService';
import { LoadingScreen, AppIntro } from '../screens';
import { View } from '../components';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {
		isAppLoading,
		appIntroDone,
		loggedIn,
    value,
	} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

	const colorScheme = Appearance.getColorScheme();
  const { setMode } = useThemeMode();

  useEffect(() => {
		setMode(colorScheme === 'dark' ? 'dark' : 'light');
	}, [colorScheme]);

  useEffect(() => {
		dispatch(authAction.getInitialState());
		// dispatch(authAction.checkLoggedIn());
	}, []);


  if (isAppLoading) {
		// We haven't finished checking for the token yet
    return <LoadingScreen />
  }

	return (
		<Stack.Navigator
			initialRouteName={appIntroDone ? "Main" : "Intro"}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name='Intro' component={AppIntro}/>
			<Stack.Screen name='Main' component={ComingSoonScreen} />
			{/* {!loggedIn && <Stack.Screen name="Auth" component={AuthStackNavigator}/>} */}
		</Stack.Navigator>
	);
};

const Navigation = () => {
	return (
		<NavigationContainer ref={navigationRef}>
			<RootNavigator />
		</NavigationContainer>
	);
};

const ComingSoonScreen = () => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text h4>Coming Soon!!!</Text>
		</View>
	);
};

export default Navigation;
