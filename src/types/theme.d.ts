import 'styled-components';

import { theme } from '~/styles/theme';

type ThemeInterface = typeof theme;

declare module 'styled-components' {
	interface DefaultTheme extends ThemeInterface {}
}
