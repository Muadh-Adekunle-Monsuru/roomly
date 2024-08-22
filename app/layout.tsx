import RegisterModal from '@/components/modals/RegisterModal';
import Navbard from '@/components/navbar/Navbard';
import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import LoginModal from '@/components/modals/LoginModal';
import getCurrentUser from '@/actions/getCurrentUser';
import RentModal from '@/components/modals/RentModal';

const inter = Inter({ subsets: ['latin'] });
const font = Nunito({
	subsets: ['latin'],
});
export const metadata: Metadata = {
	title: 'Roomly',
	description: 'Find Your Perfect Stay, Anywhere.',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const currentUser = await getCurrentUser();
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Toaster />
				<RegisterModal />
				<LoginModal />
				<RentModal />
				<Navbard currentUser={currentUser} />
				{children}
			</body>
		</html>
	);
}
