import type { SelectFieldProps } from './types';

import { FieldLabel } from '~/src/components/commons/FieldLabel';
import { PickerField, PickerContainer } from '~/src/components/commons/SelectField/styles';

export const SelectField = ({ label, options, ...rest }: SelectFieldProps) => {
	return (
		<FieldLabel label={label}>
			<PickerContainer>
				<PickerField dropdownIconColor="#afabb6" {...rest}>
					{options.map(({ value, label }) => (
						<PickerField.Item key={value} label={label} value={value} />
					))}
				</PickerField>
			</PickerContainer>
		</FieldLabel>
	);
};
