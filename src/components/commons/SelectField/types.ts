import { PickerProps } from '@react-native-picker/picker';

export type SelectFieldProps = {
	label: string;
	options: SelectOption[];
} & PickerProps;

type SelectOption = {
	label: string;
	value: string;
};
