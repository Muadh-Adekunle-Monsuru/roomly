import getCurrentUser from '@/actions/getCurrentUser';
import getListingsById from '@/actions/getListingById';
import getReservations from '@/actions/getReservations';
import EmptyState from '@/components/EmptyState';
import ListingClient from '@/components/ListingClient';
import React from 'react';

interface IParams {
	listingId?: string;
}

export const dynamic = 'force-dynamic';
export default async function ListingPage({ params }: { params: IParams }) {
	const listing = await getListingsById(params);
	const reservations = await getReservations(params);
	const currentUser = await getCurrentUser();

	if (!listing) {
		return <EmptyState />;
	}
	return (
		<div>
			<ListingClient
				listing={listing}
				currentUser={currentUser}
				reservations={reservations}
			/>
		</div>
	);
}
