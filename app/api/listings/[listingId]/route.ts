import getCurrentUser from '@/actions/getCurrentUser';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';

interface IParams {
	listingId?: string;
}
export async function DELETE(
	request: Request,
	{ params }: { params: IParams }
) {
	const { listingId } = params;
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return NextResponse.error();
	}

	if (!listingId || typeof listingId !== 'string') {
		throw new Error('Invalid ID');
	}

	const listing = await prisma.listing.deleteMany({
		where: {
			id: listingId,
			userId: currentUser.id,
		},
	});

	return NextResponse.json(listing);
}
