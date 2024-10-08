'use client';
import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useCallback } from 'react';
import { ImagePlus } from 'lucide-react';

declare global {
	var cloudinary: any;
}
interface ImageUploadProps {
	onChange: (value: string) => void;
	value: string;
}
export default function ImageUpload({ onChange, value }: ImageUploadProps) {
	const handleUpload = useCallback(
		(result: any) => {
			onChange(result.info.secure_url);
		},
		[onChange]
	);

	return (
		<CldUploadWidget
			onSuccess={handleUpload}
			uploadPreset='lhdsrf26'
			options={{ maxFiles: 1 }}
		>
			{({ open }) => {
				return (
					<div
						onClick={() => open?.()}
						className='relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-muted-foreground'
					>
						<ImagePlus className='14' />
						<div className='font-medium'>Click to upload</div>
						{value && (
							<div className='absolute inset-0 w-full h-full'>
								<Image
									alt='upload'
									fill
									style={{ objectFit: 'cover' }}
									src={value}
								/>
							</div>
						)}
					</div>
				);
			}}
		</CldUploadWidget>
	);
}
