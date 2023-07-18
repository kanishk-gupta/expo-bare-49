import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
import { Provider } from 'react-redux';
import FlashMessage from "react-native-flash-message";


import store from '../src/redux/store';
import useCachedResources from './hooks/useCachedResources';
import { theme } from './theme';
import { ErrorBoundary } from './components';
import { CATCH_ERRORS } from './constants/config';
import Navigation from './navigation';


const Main = () => {
	const isLoadingComplete = useCachedResources();
	const insets = useSafeAreaInsets();


  if (!isLoadingComplete) {
		return null;
	} else {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SafeAreaView style={{ flex: 1 }}>
            <ErrorBoundary catchErrors={CATCH_ERRORS}>
              <Navigation />
              <FlashMessage position="top" />
            </ErrorBoundary>
          </SafeAreaView>
        </ThemeProvider>
      </Provider>
    );
  }
};

export default Main;