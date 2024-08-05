import type { InputFieldProps } from '~/src/components/commons/InputField/types';

import { Input } from './styles';
import { FieldLabel } from '~/src/components/commons/FieldLabel';

export const InputField = ({ label, ...rest }: InputFieldProps) => {
	return (
		<FieldLabel label={label}>
			<Input {...rest} />
		</FieldLabel>
	);
};
