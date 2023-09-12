import { defineRule } from 'vee-validate'
import AllRules from '@vee-validate/rules'

Object.entries(AllRules).forEach(([key, values]) => {
  defineRule(key, values)
})

defineRule('charAndDigit', (value) => {
  const reg = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
  return reg.test(value)
})

export default function useValidate() {

}
