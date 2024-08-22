'use client';
import { SafeUser } from '@/app/types';
import useFavorite from '@/hooks/useFavorite';
import { Bookmark } from 'lucide-react';
import React from 'react';

interface BookmarkButtonProps {
	listingId: string;
	currentUser: SafeUser | null | undefined;
}

export default function BookmarkButton({
	currentUser,
	listingId,
}: BookmarkButtonProps) {
	const { hasFavorited, toggleFavorite } = useFavorite({
		listingId,
		currentUser,
	});

	return (
		<div
			onClick={toggleFavorite}
			className='relative hover:opacity-80 transition cursor-pointer'
		>
			<Bookmark
				className={`size-10 md:size-5  absolute -top-[2px] -right-[2px] text-muted-foreground ${
					hasFavorited && 'text-pink-700'
				}`}
			/>
		</div>
	);
}
