import type { LayoutProps } from './types';

import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { useTheme } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LayoutContainer } from '~/src/components/Layout/styles';

export const Layout = ({ children }: LayoutProps) => {
	const theme = useTheme();
	const colorScheme = useColorScheme();

	return (
		<SafeAreaView>
			<StatusBar style={colorScheme} backgroundColor={theme.backgroundColor} />
			<LayoutContainer>{children}</LayoutContainer>
		</SafeAreaView>
	);
};
