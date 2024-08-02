import type { LayoutProps } from './types';

import { StatusBar } from 'expo-status-bar';
import { View, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Layout = ({ children }: LayoutProps) => {
	const colorScheme = useColorScheme();

	return (
		<SafeAreaView>
			<StatusBar style={colorScheme} backgroundColor="#0c0c0d" />
			<View>{children}</View>
		</SafeAreaView>
	);
};
