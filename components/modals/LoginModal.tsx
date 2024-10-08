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
import useLoginModal from '@/hooks/useLoginModal';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
export default function LoginModal() {
	const { toast } = useToast();
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);
		signIn('credentials', { ...data, redirect: false }).then((callback) => {
			setIsLoading(false);

			if (callback?.ok) {
				toast({
					title: 'Logged in',
				});
				router.refresh();
				loginModal.onClose();
			}
			if (callback?.error) {
				toast({
					title: `${callback.error}`,
				});
			}
		});
	};
	const toggle = useCallback(() => {
		loginModal.onClose();
		registerModal.onOpen();
	}, [loginModal, registerModal]);

	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Heading title='Welcome back' subtitle='Login to your account' />
			<FormInput
				id='email'
				label='Email'
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
				onClick={() => {
					signIn('google');
				}}
			/>
			<Button
				outline
				label='Continue with Github'
				icon={<Github />}
				onClick={() => {
					signIn('github');
				}}
			/>
			<div className='text-neutral-500 text-center mt-4 font-light '>
				<div className='flex flex-row items-center gap-2 justify-center'>
					<div>First time using Roomly?</div>
					<div
						className='text-neutral-800 cursor-pointer hover:underline'
						onClick={toggle}
					>
						Create and account
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			title='Login  '
			actionLabel='Continue'
			onClose={loginModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
}
