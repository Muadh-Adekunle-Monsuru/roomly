'use client';
import React from 'react';
import axios from 'axios';
import Google from '../icons/Google';
import Github from '../icons/Github';
import { useCallback, useState } from 'react';
import useRegisterModal from '@/hooks/useRegisterModal';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Modal from './Modal';
import Heading from '../Heading';
import FormInput from '../FormInput';
import { useToast } from '../ui/use-toast';
import Button from '../Button';

export default function RegisterModal() {
	const { toast } = useToast();
	const registerModal = useRegisterModal();
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		axios
			.post('/api/register', data)
			.then(() => {
				registerModal.onClose();
			})
			.catch((error) =>
				toast({
					title: 'Something Went Wrong.',
				})
			)
			.finally(() => setIsLoading(false));
	};

	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Heading title='Welcome To Roomly' subtitle='Create and account' />
			<FormInput
				id='email'
				label='Email'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<FormInput
				id='name'
				label='Name'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<FormInput
				id='password'
				label='Password'
				type='password'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	);

	const footerContent = (
		<div className='flex flex-col gap-4 mt-3'>
			<hr />
			<Button
				outline
				label='Continue with Google'
				icon={<Google />}
				onClick={() => {}}
			/>
			<Button
				outline
				label='Continue with Github'
				icon={<Github />}
				onClick={() => {}}
			/>
			<div className='text-neutral-500 text-center mt-4 font-light '>
				<div className='flex flex-row items-center gap-2 justify-center'>
					<div>Already have an account?</div>
					<div
						className='text-neutral-800 cursor-pointer hover:underline'
						onClick={registerModal.onClose}
					>
						Log in
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title='Register'
			actionLabel='Continue'
			onClose={registerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
}
