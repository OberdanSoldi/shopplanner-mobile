import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ShopList } from './components/ShopList';

export default function App() {
	return (
		<View>
			<ShopList />
			<StatusBar style="light" />
		</View>
	);
}
