import { ThemeProvider } from 'styled-components/native';

import { theme } from '~/styles/theme';
import { Layout } from '~/src/components/Layout';
import { ShopList } from '~/src/components/ShopList';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<ShopList />
			</Layout>
		</ThemeProvider>
	);
}
