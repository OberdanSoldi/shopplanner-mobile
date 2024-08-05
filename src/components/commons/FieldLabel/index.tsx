import type { FieldLabelProps } from './types';

import { Label } from '~/src/components/commons/FieldLabel/styles';

export const FieldLabel = ({ label, children }: FieldLabelProps) => {
	return (
		<>
			<Label>{label}</Label>
			{children}
		</>
	);
};
