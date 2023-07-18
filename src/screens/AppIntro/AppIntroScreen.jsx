import React, { useRef } from 'react';
// import * as Location from 'expo-location';
import { Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
// import { LinearGradient } from 'expo-linear-gradient';
// import { deg } from 'react-native-linear-gradient-degree';
import { useDispatch } from 'react-redux';
import { Text, useTheme } from "@rneui/themed";


import useStyles from './AppIntroStyle';
import { View } from '../../components/themed';
import SliderOne from '../../assets/images/slider-1.png';
import SliderTwo from '../../assets/images/slider-2.png';
import SliderThree from '../../assets/images/slider-3.png';
import SliderFour from '../../assets/images/slider-4.png';
import i18n from '../../i18n';
import { authAction } from "../../redux/actions";

const slides = [
	{
		key: 1,
		title: i18n.t('intro_title_1'),
		subtitle: i18n.t('intro_subtitle_1'),
		image: SliderOne,
		backgroundColor: '#59b2ab',
	},
	{
		key: 2,
		title: i18n.t('intro_title_2'),
		subtitle: i18n.t('intro_subtitle_2'),
		image: SliderTwo,
		backgroundColor: '#febe29',
	},
	{
		key: 3,
		title: i18n.t('intro_title_3'),
		subtitle: i18n.t('intro_subtitle_3'),
		image: SliderThree,
		backgroundColor: '#22bcb5',
	},
	{
		key: 4,
		title: i18n.t('intro_title_4'),
		subtitle: i18n.t('intro_subtitle_4'),
		image: SliderFour,
		backgroundColor: '#F58F85',
	}
];


const AppIntroScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const { theme } = useTheme();
	const styles = useStyles();
	const slider = useRef();

	// const [locationPermission, setLocationPermission] = useState(null);
	// const [errorMsg, setErrorMsg] = useState(null);


	/**
	 * Render next and done buttons
	 * 
	 * @param {String} text 
	 */
	/* const _renderButton = (text) => {
		const isDisbled = text.toLowerCase() == 'done' && !locationPermission;

		return (
			<ThemedButton text={text} disabled={isDisbled} />
		);
	}; */

	/**
	 * Render skip button
	 * @param {Object} props 
	 */
	/* const _renderSkipButton = (props) => {
		return (
			<Button
				{...props}
				title="Skip"
				type="clear"
				textColor="#242B5D"
				size="sm"
				containerStyle={styles.sliderButtons}
				disabled
				disabledTitleStyle={{ color: "#242B5D" }}
			/>
		);
	}; */

	/* const requestLocationPermission = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			setLocationPermission(false);
			setErrorMsg('Location Permission to required for this app to work properly');
			return;
		} else {
			setLocationPermission(true);
			setErrorMsg(null);
		}
	}; */


	/**
	 * Handle intro completion
	 */
	const handleDone = () => {
		dispatch(authAction.setIntroDone());
		navigation.replace('Main');
	};

	const handleSkip = () => {
		slider.current.goToSlide(3, true)
	};

	/**
	 * Handle slide change
	 * 
	 * @param {number} index 
	 * @param {number} lastIndex 
	 */
	const handleSlideChange = async (index, lastIndex) => {
		/* if (index === 3) {
			// requestLocationPermission();
		} */
	};

	/**
	 * Rennder app intro slide
	 * 
	 * @param {object} 
	 * @returns {JSX}
	 */
	const renderItem = ({ item }) => {
		return (
			<View style={[styles.sliderContainer, { backgroundColor: item.backgroundColor }]}>
				<View style={[styles.content, { backgroundColor: item.backgroundColor }]}>
					<Image
						source={item.image}
						style={item.key === 3 ? [styles.image, { width: '82%' }] : [styles.image]}
					/>
					<View style={[styles.textContainer, { backgroundColor: item.backgroundColor }]}>
						<Text style={styles.title}>{item.title}</Text>
						<Text style={styles.subtitle}>{item.subtitle}</Text>
					</View>
					{/* {errorMsg && <Text style={styles.errorMsg}>{errorMsg}</Text>} */}
				</View>
			</View>
		);
	};
	

	return (
		<AppIntroSlider
			renderItem={renderItem}
			data={slides}
			onDone={handleDone}
			// onSkip={handleSkip}
			bottomButton={true}
			showSkipButton={true}
			dotStyle={{ backgroundColor: theme.colors.grey4 }}
			activeDotStyle={{ backgroundColor: theme.colors.tertiary }}
			// renderNextButton={() => _renderButton('Next')}
			// renderDoneButton={() => _renderButton('Done')}
			// renderSkipButton={() => _renderSkipButton()}
			onSlideChange={handleSlideChange}
			ref={(ref) => (slider.current = ref)}
			style={styles.slider}
		/>
	);
};

/* const ThemedButton = ({ text, disabled }) => {
	const { theme } = useTheme();
	const styles = useStyles();

	return (
		<LinearGradient
			colors={disabled ? [theme.colors.grey3, theme.colors.grey4] : ['#4ED2A5', '#5DABF8']}
			start={{ x: 0.2, y: 1 }}
			end={{ x: 1, y: 0.2 }}
			{...deg(2)}
			style={styles.themedBtn}>
			<Text style={[styles.themedBtnText, { color: theme.colors.background }]}>{text}</Text>
		</LinearGradient>
	)
}; */

export default AppIntroScreen;