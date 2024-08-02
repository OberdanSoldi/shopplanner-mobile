import { SafeAreaView } from 'react-native-safe-area-context';

import { ShopListHeader, ShopListContainer } from './styles';

export const ShopList = () => {
	return (
		<ShopListContainer>
			<SafeAreaView>
				<ShopListHeader>ShopList</ShopListHeader>
			</SafeAreaView>
		</ShopListContainer>
	);
};
