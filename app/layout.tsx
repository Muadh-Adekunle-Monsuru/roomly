import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Nunito } from 'next/font/google';
import Navbard from '@/components/navbar/Navbard';

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
				<Navbard />
				{children}
			</body>
		</html>
	);
}
