<script setup>
const props = defineProps(
  {
    treeData: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
)
</script>

<template>
  <h1>TreeNode</h1>
</template>
