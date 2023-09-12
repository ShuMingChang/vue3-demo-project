<script setup>
import { useFetchMenu } from '@/stores/useFetchMenu'

import Tree from '@/components/Tree/Tree.vue'

const { isLoading, result, fetchMenu } = useFetchMenu()
fetchMenu()

const selectValue = ref('ce8')
</script>

<template>
  <h1>Vue Tree</h1>
  <p>{{ selectValue }}</p>
  <Tree v-model="selectValue" :tree-data="result" />
</template>

<style scoped></style>
