'use client';
import { SafeReservation, SafeUser } from '@/app/types';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import Container from './Container';
import Heading from './Heading';
import ListingCard from './Listing';
import { toast } from './ui/use-toast';
interface TripsClientProps {
	currentUser?: SafeUser | null;
	reservations: SafeReservation[];
}
export default function TripsClient({
	currentUser,
	reservations,
}: TripsClientProps) {
	const router = useRouter();
	const [deletingId, setDeletingId] = useState('');

	const onCancle = useCallback(
		(id: string) => {
			setDeletingId(id);
			toast({ title: 'Cancelling...' });
			axios
				.delete(`/api/reservations/${id}`)
				.then(() => {
					toast({ title: 'Reservation cancelled!' });
					router.refresh();
				})
				.catch((error) => toast({ title: `${error.response.data.error}` }))
				.finally(() => {
					setDeletingId('');
				});
		},
		[router]
	);
	return (
		<Container>
			<Heading
				title='Trips'
				subtitle='Where you have been and where you are going'
			/>
			<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
				{reservations.map((reservation) => (
					<ListingCard
						key={reservation.id}
						data={reservation.listing}
						actionId={reservation.id}
						onAction={onCancle}
						actionLabel='Cancel reservation'
						currentUser={currentUser}
						reservation={reservation}
						disabled={deletingId == reservation.id}
					/>
				))}
			</div>
		</Container>
	);
}
