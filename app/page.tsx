import { Plus } from 'lucide-react';
import './customstyles.css';
import Container from '@/components/Container';
import EmptyState from '@/components/EmptyState';
import getListings, { IListingParams } from '@/actions/getListings';
import { Listing } from '@prisma/client';
import ListingCard from '@/components/Listing';
import getCurrentUser from '@/actions/getCurrentUser';
import { SafeListing } from './types';

interface HomeProps {
	searchParams: IListingParams;
}

export default async function Home({ searchParams }: HomeProps) {
	const listings = await getListings(searchParams);
	const currentUser = await getCurrentUser();

	if (listings.length == 0) {
		return (
			<>
				<EmptyState showReset />
			</>
		);
	}
	return (
		<div className='h-full bg-white'>
			<Container>
				<div className='pt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
					{listings.map((listing) => (
						<ListingCard
							key={listing.id}
							data={listing}
							currentUser={currentUser}
						/>
					))}
				</div>
			</Container>
		</div>
	);
}
