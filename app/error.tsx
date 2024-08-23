'use client';
import EmptyState from '@/components/EmptyState';
import React from 'react';
import { useEffect } from 'react';

interface ErrorStateProps {
	error: Error;
}

export default function Error({ error }: ErrorStateProps) {
	useEffect(() => {
		console.error(error);
	}, []);

	return <EmptyState title='Uh Oh' subtitle='Something went wrong' />;
}
