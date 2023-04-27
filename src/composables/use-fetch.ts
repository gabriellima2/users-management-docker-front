import { ref, onMounted, type UnwrapRef } from 'vue'

type UseFetchParams<D> = {
	service: () => Promise<D>
}

export function useFetch<D>(params: UseFetchParams<D>) {
	const { service } = params;
	const data = ref<null | D>(null)
	const error = ref<null | string>(null)
	const isLoading = ref<boolean>(true)
	
	onMounted(() => {
		service()
			.then((value) => (data.value = Object.freeze(value) as UnwrapRef<D>))
			.catch((err) => (error.value = (err as Error).message))
			.finally(() => (isLoading.value = false))
	})

	return {
		data,
		error,
		isLoading,
	}
}
