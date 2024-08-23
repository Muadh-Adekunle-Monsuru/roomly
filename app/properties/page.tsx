import React from 'react';
import EmptyState from '@/components/EmptyState';
import getCurrentUser from '@/actions/getCurrentUser';
import getReservations from '@/actions/getReservations';
import TripsClient from '@/components/TripsClient';
import getListings from '@/actions/getListings';
import PropertiesClient from '@/components/PropertiesClient';

export const dynamic = 'force-dynamic';
export default async function PropertiesPage() {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return <EmptyState title='Unauthorized' subtitle='Please log in.' />;
	}

	const listings = await getListings({ userId: currentUser.id });

	if (listings.length == 0) {
		return (
			<EmptyState
				title='No properties found'
				subtitle='Looks like you have no properties up for rent.'
			/>
		);
	}
	return (
		<div>
			<PropertiesClient listings={listings} currentUser={currentUser} />
		</div>
	);
}
