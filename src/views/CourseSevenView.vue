<script setup>
import { useForm } from 'vee-validate'
import useLocale from '@/composable/useLocale.js'
import CustomInput from '@/components/CustomInput.vue'

const { setLocale, showKey } = useLocale()
const { t, n, availableLocales, locale } = useI18n()
function changeLanguage() {
  setLocale(locale)
}
const isShowKey = ref(false)
const { handleSubmit, values } = useForm({
  validationSchema: {
    account: 'required|charAndDigit|min:8',
  },
})
const onSubmit = handleSubmit((values) => {
  // pretty print the values object
  console.log(values)
})
// TODO 取代某個error，disable submit，reset，靜音
</script>

<template>
  <h1>Vue-i18n </h1>
  <select v-model="locale" name="language" @change="changeLanguage">
    <option
      v-for="locale in availableLocales"
      :key="locale"
      :value="locale"
    >
      {{ locale }}
    </option>
  </select>
  <button @click="showKey(isShowKey = !isShowKey)">
    showKey
  </button>
  <p>{{ t('common.label.username') }}</p>
  <p>{{ n(10000, 'currency') }}</p>
  <form @action="onSubmit">
    <CustomInput
      name="account"
      :label="t('page.courseSeven.label.account')"
      :placeholder="t('page.courseSeven.placeholder.account')"
    />
  </form>
</template>

<style scoped></style>
