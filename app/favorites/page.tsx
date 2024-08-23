import React from 'react';
import EmptyState from '@/components/EmptyState';
import getCurrentUser from '@/actions/getCurrentUser';
import getFavoriteListings from '@/actions/getFavoriteListing';
import FavoritesClient from '@/components/FavoritesClient';
import Heading from '@/components/Heading';
import Container from '@/components/Container';

export const dynamic = 'force-dynamic';
export default async function page() {
	const listings = await getFavoriteListings();
	const currentUser = await getCurrentUser();

	if (listings.length == 0) {
		return (
			<Container>
				<Heading
					title='Favorites'
					subtitle='List of places you have bookmarked!'
				/>
				<EmptyState
					title='No favorites found'
					subtitle='Looks like you have no favorite listings'
				/>
			</Container>
		);
	}

	return (
		<div>
			<FavoritesClient listings={listings} currentUser={currentUser} />
		</div>
	);
}
