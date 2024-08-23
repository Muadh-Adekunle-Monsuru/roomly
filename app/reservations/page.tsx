import React from 'react';
import EmptyState from '@/components/EmptyState';
import getCurrentUser from '@/actions/getCurrentUser';
import getReservations from '@/actions/getReservations';
import ReservationsClient from '@/components/ReservationsClient';

export const dynamic = 'force-dynamic';
export default async function page() {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return <EmptyState title='Unauthorized' subtitle='Please log in.' />;
	}

	const reservations = await getReservations({ authorId: currentUser.id });

	if (reservations.length == 0) {
		return (
			<EmptyState
				title='No reservations found'
				subtitle='No reservations has been made on your properties.'
			/>
		);
	}
	return (
		<div>
			<ReservationsClient
				reservations={reservations}
				currentUser={currentUser}
			/>
		</div>
	);
}
