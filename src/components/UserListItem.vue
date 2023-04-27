<script setup lang="ts">
import type { UserEntity } from '../entities/user-entity'

type UserListItemProps = {
  user: UserEntity
}

const props = defineProps<UserListItemProps>()

function handleRemove(id: string) {
  console.log(`Removendo ${id}`)
}
</script>

<template>
  <li>
    <section>
      <h1>{{ props.user.name }}</h1>
      <h2>{{ props.user.email }}</h2>
    </section>
    <button type="button" @click.prevent="() => handleRemove(props.user.id)">Remover</button>
  </li>
</template>

<style scoped></style>