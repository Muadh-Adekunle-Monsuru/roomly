'use client';
import { DropdownMenuItem } from '../ui/dropdown-menu';

interface MenuItemProps {
	onClick: () => void;
	label: string;
}
export default function MenuItem({ onClick, label }: MenuItemProps) {
	return (
		<>
			<DropdownMenuItem onClick={onClick}>{label}</DropdownMenuItem>
		</>
	);
}
