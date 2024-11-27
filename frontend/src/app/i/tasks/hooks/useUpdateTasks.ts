import { TypeTaskFormState } from '@/types/task.types'

import { taskService } from '@/services/task.service'
import { useMutation, useQueries, useQueryClient } from '@tanstack/react-query'

export function useUpdateTask(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateTask } = useMutation({
		mutationKey: ['update task', key],
		mutationFn: ({ id, data }: { id: string; data: TypeTaskFormState }) =>
			taskService.updateTask(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			})
		}
	})

	return { updateTask }
}
