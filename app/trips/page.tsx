import React from 'react';
import EmptyState from '@/components/EmptyState';
import getCurrentUser from '@/actions/getCurrentUser';
import getReservations from '@/actions/getReservations';
import TripsClient from '@/components/TripsClient';

export const dynamic = 'force-dynamic';
export default async function page() {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return <EmptyState title='Unauthorized' subtitle='Please log in.' />;
	}

	const reservations = await getReservations({ userId: currentUser.id });

	if (reservations.length == 0) {
		return (
			<EmptyState
				title='No trips found'
				subtitle='Looks like you have not reserved any trips.'
			/>
		);
	}
	return (
		<div>
			<TripsClient reservations={reservations} currentUser={currentUser} />
		</div>
	);
}
