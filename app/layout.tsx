import RegisterModal from '@/components/modals/RegisterModal';
import Navbard from '@/components/navbar/Navbard';
import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });
const font = Nunito({
	subsets: ['latin'],
});
export const metadata: Metadata = {
	title: 'Roomly',
	description: 'Find Your Perfect Stay, Anywhere.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Toaster />
				<RegisterModal />
				<Navbard />
				{children}
			</body>
		</html>
	);
}
