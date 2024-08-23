'use client';
import { SafeListing, SafeReservation, SafeUser } from '@/app/types';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import Container from './Container';
import Heading from './Heading';
import ListingCard from './Listing';
import { toast } from './ui/use-toast';

interface PropertiesClientProps {
	currentUser?: SafeUser | null;
	listings: SafeListing[];
}

export default function PropertiesClient({
	currentUser,
	listings,
}: PropertiesClientProps) {
	const router = useRouter();
	const [deletingId, setDeletingId] = useState('');

	const onCancle = useCallback(
		(id: string) => {
			setDeletingId(id);
			toast({
				title: 'Deleting...',
			});
			axios
				.delete(`/api/listings/${id}`)
				.then(() => {
					toast({ title: 'Listing deleted!' });
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
			<Heading title='Properties' subtitle='List of your properties' />
			<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
				{listings.map((listing) => (
					<ListingCard
						key={listing.id}
						data={listing}
						actionId={listing.id}
						onAction={onCancle}
						actionLabel='Delete property'
						currentUser={currentUser}
						disabled={deletingId == listing.id}
					/>
				))}
			</div>
		</Container>
	);
}
