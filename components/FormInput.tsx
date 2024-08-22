import { DollarSign } from 'lucide-react';
import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { Input } from './ui/input';
import { Label } from './ui/label';
interface InputProps {
	id: string;
	label: string;
	type?: string;
	disabled?: boolean;
	formatPrice?: boolean;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

export default function FormInput({
	errors,
	id,
	label,
	register,
	disabled,
	formatPrice,
	required,
	type = 'text',
}: InputProps) {
	return (
		<div className='w-full relative'>
			{formatPrice && (
				<DollarSign className='text-neutral-700 size-4 absolute top-1/2 left-2' />
			)}
			<Label
				className={` 
                    ${formatPrice ? 'left-9' : 'left-4'}  
                    ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
                    `}
			>
				{label}
			</Label>
			<Input
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder={label}
				type={type}
				className={`peer  w-full p-2 pt-2 font-light bg-white  rounded-md   transition focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed ${
					formatPrice ? 'pl-9' : 'pl-4'
				} ${
					errors[id]
						? 'border-rose-500 focus:border-rose-500'
						: 'border-neutral-300 focus:border-black'
				}`}
			/>
		</div>
	);
}
