<script setup lang="ts">
import UserListItem from './UserListItem.vue';
import type { UserEntity } from '../entities/user-entity'

type UserListProps = {
  users: UserEntity[]
}

const props = defineProps<UserListProps>()
</script>

<template>
  <ul>
    <UserListItem
      v-for="user in props.users"
      :key="user.id"
      :user="user"
    />
  </ul>
</template>

<style scoped></style>