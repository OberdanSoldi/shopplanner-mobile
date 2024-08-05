import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

export const PickerContainer = styled.View`
	height: 40px;
	border-radius: 6px;
	border: 1px solid #252529;
	display: flex;
	justify-content: center;
`;

export const PickerField = styled(Picker)`
	color: white;
	display: flex;
	height: 40px !important;
`;
