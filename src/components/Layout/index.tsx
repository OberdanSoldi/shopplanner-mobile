import type { LayoutProps } from './types';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useTheme } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Inter_700Bold, Inter_900Black, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

import { LayoutContainer } from './styles';

SplashScreen.preventAutoHideAsync();

export const Layout = ({ children }: LayoutProps) => {
	const theme = useTheme();
	const colorScheme = useColorScheme();

	const [fontsLoaded] = useFonts({
		Inter_700Bold,
		Inter_900Black,
		Inter_400Regular,
		Inter_600SemiBold
	});

	const onLayoutRootView = React.useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView>
			<StatusBar style={colorScheme} backgroundColor={theme.backgroundColor} />
			<LayoutContainer onLayout={onLayoutRootView}>{children}</LayoutContainer>
		</SafeAreaView>
	);
};
