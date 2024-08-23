'use client';
import { SafeReservation, SafeUser } from '@/app/types';
import React from 'react';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import Heading from './Heading';
import Container from './Container';
import axios from 'axios';
import { toast } from './ui/use-toast';
import ListingCard from './Listing';
interface Props {
	reservations: SafeReservation[];
	currentUser: SafeUser | null;
}
export default function ReservationsClient({
	currentUser,
	reservations,
}: Props) {
	const router = useRouter();
	const [deletingId, setDeletingId] = useState('');

	const onCancel = useCallback((id: string) => {
		setDeletingId(id);
		toast({ title: 'Cancelling...' });
		axios
			.delete(`/api/reservations/${id}`)
			.then(() => {
				toast({ title: 'Reservation cancelled' });
				router.refresh();
			})
			.catch(() => {
				toast({ title: 'Something went wrong.' });
			})
			.finally(() => {
				setDeletingId('');
			});
	}, []);
	return (
		<Container>
			<Heading title='Reservations' subtitle='Bookings on your properties' />
			<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
				{reservations.map((reservation) => (
					<ListingCard
						key={reservation.id}
						data={reservation.listing}
						reservation={reservation}
						actionId={reservation.id}
						onAction={onCancel}
						disabled={deletingId == reservation.id}
						actionLabel='Cancel guest reservation'
						currentUser={currentUser}
					/>
				))}
			</div>
		</Container>
	);
}
