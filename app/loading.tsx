import { Skeleton } from '@/components/ui/skeleton';
const Loading = () => {
	return (
		<div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:-x-2 px-4 flex flex-col gap-5'>
			<Skeleton className='h-[85px] w-full py-6' />
			<Skeleton className='h-[125px] w-full py-6' />
		</div>
	);
};

export default Loading;
