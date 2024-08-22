'use client';
import React from 'react';
import { DateRange, Range, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CalendarProps {
	value: Range;
	onChange: (value: RangeKeyDict) => void;
	disabledDates?: Date[];
}

export default function Calendar({
	onChange,
	value,
	disabledDates,
}: CalendarProps) {
	return (
		<DateRange
			ranges={[value]}
			date={new Date()}
			onChange={onChange}
			direction='vertical'
			showDateDisplay={false}
			minDate={new Date()}
			disabledDates={disabledDates}
		/>
	);
}
