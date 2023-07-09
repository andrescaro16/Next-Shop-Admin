'use client';

import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Nav from '@/common/Nav';
import './globals.css';


const inter = Inter({
	subsets: ['latin'],
});

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<title>Shop</title>
			<body className={inter.className}>
				<div className='min-h-full'>
					<Header />
					<Nav />
					<main>
						<div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
							{children}
						</div>
					</main>
				</div>
			</body>
		</html>
	);
}
