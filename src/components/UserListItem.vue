<script setup lang="ts">
import type { UserEntity } from '../entities/user-entity'

type UserListItemProps = {
  user: UserEntity
}

const props = defineProps<UserListItemProps>()
</script>

<template>
  <li>
    <section>
      <h1>{{ props.user.name }}</h1>
      <h2>{{ props.user.email }}</h2>
    </section>
  </li>
</template>

<style scoped></style>