<script setup>
import { useField } from 'vee-validate'

const props = defineProps({
  label: {
    type: String,
    defaults: '',
  },
  type: {
    type: String,
    defaults: 'text',
  },
  name: {
    type: String,
    defaults: '',
  },
  placeholder: {
    type: String,
    defaults: '',
  },
})

const { value, errorMessage } = useField(props.name, undefined, {
  label: computed(() => props.label),
})
</script>

<template>
  <div class="form-control" :class="{ 'is-invalid': errorMessage }">
    <label :for="name">{{ label }}</label>
    <input
      :id="name"
      v-model="value"
      :name="name"
      :type="type"
      :placeholder="placeholder"
    >
  </div>
  <p class="invalid-feedback">
    {{ errorMessage }}
  </p>
</template>

<style scoped>
.form-control {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  border: none;
  border-bottom: 1px solid #ced4da;
}

label {
  padding-right: 10px;
  font-weight: bold;
  white-space: nowrap;
  flex: 0;
}
input {
  border: none;
  outline: none;
  flex: 1 0 0;
}

.is-invalid {
  border-color: red;
}
.invalid-feedback {
  padding-left: 0.75rem;
  color: red;
}
</style>
