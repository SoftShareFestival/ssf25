import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/styles/global.scss';
import { paperlogy } from '@/utils/font';

export const metadata: Metadata = {
	title: '2025 소프트웨어나눔축제',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${paperlogy.className}`}>{children}</body>
		</html>
	);
}
