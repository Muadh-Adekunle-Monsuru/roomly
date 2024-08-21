'use client';
import { SafeUser } from '@/app/types';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { Menu } from 'lucide-react';
import { signOut } from 'next-auth/react';
import AvatarIcon from '../Avatar';
import MenuItem from './MenuItem';
import { toast } from '../ui/use-toast';

interface UserMenuProps {
	currentUser?: SafeUser | null;
}

export default function UserMenu({ currentUser }: UserMenuProps) {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
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
								<AvatarIcon src={currentUser?.image} />
							</div>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{currentUser ? (
							<>
								<MenuItem onClick={() => {}} label='My trips' />
								<MenuItem onClick={() => {}} label='My favorites' />
								<MenuItem onClick={() => {}} label='My reservations' />
								<MenuItem onClick={() => {}} label='My properties' />
								<MenuItem onClick={() => {}} label='Rent my home' />
								<DropdownMenuSeparator />
								<MenuItem
									onClick={() => {
										signOut();
										toast({ title: 'Signed Out' });
									}}
									label='Log Out'
								/>
							</>
						) : (
							<>
								<MenuItem onClick={loginModal.onOpen} label='Log in' />
								<DropdownMenuSeparator />
								<MenuItem onClick={registerModal.onOpen} label='Sign up' />
							</>
						)}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
