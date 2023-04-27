<script setup lang="ts">
import UsersList from './components/UsersList.vue'
import { useFetch } from './composables/use-fetch'
import { UserEntity } from './entities/user-entity'
import { makeGetUsersService } from './factories/services/user-services/make-get-users-service'

const getUsersService = makeGetUsersService()
const { data, error, isLoading } = useFetch<UserEntity[]>({ service: () => getUsersService.execute() })
</script>

<template>
  <main>
    <h1 v-if="isLoading">Carregando...</h1>
    <h1 v-else-if="error">{{ error }}</h1>
    <UsersList v-else-if="data" :users="data" />
  </main>
</template>

<style scoped></style>
