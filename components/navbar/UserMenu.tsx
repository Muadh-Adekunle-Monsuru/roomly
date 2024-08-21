'use client';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import AvatarIcon from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '@/hooks/useRegisterModal';
export default function UserMenu() {
	const registerModal = useRegisterModal();
	return (
		<div className='relative'>
			<div className='flex flex-row items-center gap-3'>
				<div
					className='hidden md:block text-sm font-medium py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
					onClick={() => {}}
				>
					Rent Out Your Room
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger className='outline-none'>
						<div
							className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
							onClick={() => {}}
						>
							<Menu />
							<div className='hidden md:block'>
								<AvatarIcon />
							</div>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<MenuItem onClick={() => {}} label='Login' />
						<DropdownMenuSeparator />
						<MenuItem onClick={registerModal.onOpen} label='SignUp' />
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
