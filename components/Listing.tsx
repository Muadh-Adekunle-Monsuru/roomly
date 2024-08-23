'use client';
import { SafeListing, SafeReservation, SafeUser } from '@/app/types';
import useCountries from '@/hooks/useCountries';
import { Listing, Reservation, User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React, { useCallback, useMemo } from 'react';
import { format } from 'date-fns';
import Image from 'next/image';
import BookmarkButton from './BookmarkButton';
import Button from './Button';
import { CircleX } from 'lucide-react';
import CloseTooltip from './CloseTooltip';

interface ListingCardProps {
	data: SafeListing;
	currentUser?: SafeUser | null;
	reservation?: SafeReservation;
	onAction?: (val: string) => void;
	disabled?: boolean;
	actionLabel?: string;
	actionId?: string;
}
export default function ListingCard({
	data,
	actionId = '',
	actionLabel,
	currentUser,
	disabled,
	onAction,
	reservation,
}: ListingCardProps) {
	const router = useRouter();
	const { getByValue } = useCountries();
	const location = getByValue(data.locationValue);

	const handleCancel = useCallback(
		(event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
			event.stopPropagation();
			if (disabled) {
				return;
			}

			onAction?.(actionId);
		},
		[onAction, actionId, disabled]
	);

	const price = useMemo(() => {
		if (reservation) {
			return reservation.totalPrice;
		}
		return data.price;
	}, [reservation, data.price]);

	const reservationDate = useMemo(() => {
		if (!reservation) {
			return null;
		}

		const start = new Date(reservation.startDate);
		const end = new Date(reservation.endDate);

		return `${format(start, 'PP')} - ${format(end, 'PP')}`;
	}, [reservation]);

	return (
		<div
			onClick={() => router.push(`/listings/${data.id}`)}
			className='col-span-1 cursor-pointer group rounded-xl pb-5'
		>
			<div className='flex flex-col gap-1 w-full'>
				<div className='aspect-square w-full relative overflow-hidden rounded-xl'>
					<Image
						alt='Listing image'
						src={data.imageSrc}
						className='object-cover h-full w-full group-hover:scale-110 transition'
						fill
					/>
					<div className='absolute top-3 right-2 gap-4 w-10 flex flex-col items-center justify-end'>
						{currentUser?.id && (
							<BookmarkButton listingId={data.id} currentUser={currentUser} />
						)}
						{onAction && actionLabel && (
							<div onClick={handleCancel} className=''>
								<CloseTooltip actionLabel={actionLabel} />
							</div>
						)}
					</div>
				</div>
				<div className='flex flex-col gap-1 px-2'>
					<div className='flex justify-between text-xs items-center gap-4'>
						<div className='font-medium text-gray-700 text-sm '>
							{reservationDate || data.category}
						</div>
						{!reservation && (
							<div className='text-muted-foreground text-nowrap truncate '>
								{location?.region}, {location?.label}
							</div>
						)}
					</div>
					<div className='font-semibold text-lg text-nowrap truncate'>
						{data.title}
					</div>

					<div className='flex flex-row items-center gap-1'>
						<div className='font-semibold text-nowrap truncate'>${price}</div>
						{!reservation && <div className='font-light text-xs'>night</div>}
					</div>
					{/* {onAction && actionLabel && (
						<Button
							disabled={disabled}
							label={actionLabel}
							onClick={handleCancel}
							outline
						/>
					)} */}
				</div>
			</div>
		</div>
	);
}
