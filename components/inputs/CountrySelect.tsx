'use client';
import useCountries from '@/hooks/useCountries';
import React from 'react';
import Select from 'react-select';

export type CountrySelectValue = {
	flag: string;
	label: string;
	latlng: number[];
	region: string;
	value: string;
};

interface CountrySelectProps {
	value?: CountrySelectValue;
	onChange: (value: CountrySelectValue) => void;
}
export default function CountrySelect({ value, onChange }: CountrySelectProps) {
	const { getAll } = useCountries();
	return (
		<div>
			<Select
				placeholder='Anywhere'
				isClearable
				options={getAll()}
				value={value}
				onChange={(value) => onChange(value as CountrySelectValue)}
				formatOptionLabel={(option: any) => (
					<div className='flex flex-row items-center gap-3'>
						<div>{option.flag}</div>
						<div>
							{option.label} |
							<span className='text-muted-foreground ml-2'>
								{option.region}
							</span>
						</div>
					</div>
				)}
				classNames={{
					control: () => 'p-3 border-2',
					input: () => 'text-sm',
					option: () => 'text-sm',
				}}
				theme={(theme) => ({
					...theme,
					borderRadius: 6,
					colors: {
						...theme.colors,
						primary: 'black',
					},
				})}
			/>
		</div>
	);
}
