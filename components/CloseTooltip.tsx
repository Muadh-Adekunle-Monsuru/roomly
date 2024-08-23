import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { CircleX } from 'lucide-react';
import React from 'react';

export default function CloseTooltip({ actionLabel }: { actionLabel: string }) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger className='flex items-center'>
					<CircleX className='size-5 text-muted-foreground hover:text-black' />
				</TooltipTrigger>
				<TooltipContent>
					<p>{actionLabel}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
