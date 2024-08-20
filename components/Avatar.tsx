'use client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';

export default function AvatarIcon() {
	return (
		<Avatar>
			<AvatarImage src='' />
			<AvatarFallback>
				<User className='size-4' />
			</AvatarFallback>
		</Avatar>
	);
}
