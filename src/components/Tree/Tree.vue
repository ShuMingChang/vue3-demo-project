<script setup>
const props = defineProps({
  treeData: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])
const { treeData } = toRefs(props)
const treeList = computed(() => {
  function flatTreeNode(nodeList, result) {
    return nodeList.reduce((accumulator, { children, ...treeData }) => {
      if (children?.length)
        return [treeData, ...flatTreeNode(children, accumulator)]
      else
        return [treeData, ...accumulator]
    }, result)
  }
  return flatTreeNode(treeData.value, [])
})

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <h1>tree</h1>
  {{ treeList }}
  <div>
    <select v-model="value">
      <option v-for="treeNode of treeList" :key="treeNode.id" :value="treeNode.id">
        {{ treeNode.name }}
      </option>
    </select>
  </div>
</template>
