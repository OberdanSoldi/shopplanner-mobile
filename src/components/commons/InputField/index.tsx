import type { InputFieldProps } from '~/src/components/commons/InputField/types';

import { Input, InputFieldContainer } from './styles';
import { FieldLabel } from '~/src/components/commons/FieldLabel';

export const InputField = ({ label, ...rest }: InputFieldProps) => {
	return (
		<InputFieldContainer>
			<FieldLabel label={label}>
				<Input {...rest} />
			</FieldLabel>
		</InputFieldContainer>
	);
};
