'use client'

import Loader from '@/components/ui/Loader'

import { useIsFetching, useIsMutating } from '@tanstack/react-query'

export function GlobalLoader() {
	const isMuatating = useIsMutating()
	const isFetching = useIsFetching()

	return isFetching || isMuatating ? (
		<div className='fixed top-layout right-layout z-50'>
			<Loader />
		</div>
	) : null
}
