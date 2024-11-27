'use client'

import Loader from '@/components/ui/Loader'

import { useLocalStorage } from '@/hooks/useLocalStorage'

import { KanbanView } from './kanban-view/KanbanView'
import { ListView } from './list-view/ListView'
import { SwitcherView } from './list-view/SwitcherView'

export type TypeView = 'list' | 'kanban'

export function TaskView() {
	const [type, setType, isLoading] = useLocalStorage<TypeView>({
		key: 'view-type',
		defaultValue: 'list'
	})

	if (isLoading) return <Loader />

	return (
		<div>
			<SwitcherView
				setType={setType}
				type={type}
			/>
			{type === 'list' ? <ListView /> : <KanbanView />}
		</div>
	)
}
