<template>
  <div class="validate-input-container pb-3">
    <input
      v-if="tag === 'input'"
      type="text"
      class="form-control"
      @blur="validateInput"
      :value="inputRef.val"
      :class="{ 'is-invalid': inputRef.err }"
      @input="updateValue"
      v-bind="$attrs"
    />
    <textarea
      v-else
      type="text"
      class="form-control"
      @blur="validateInput"
      :value="inputRef.val"
      :class="{ 'is-invalid': inputRef.err }"
      @input="updateValue"
      v-bind="$attrs"
    />

    <span v-if="inputRef.err" class="invalid-feedback">{{ inputRef.message }}</span>
  </div>
</template>

<script lang="ts">
import { emailReg } from '@/utils/reg'
import { defineComponent, onMounted, PropType, reactive } from 'vue'
import { emitter } from './ValidateForm.vue'

export interface RuleProp {
  type: 'email' | 'required'
  message: string
}

export type RulesProp = Array<RuleProp>
export type tag = 'input' | 'textarea'
export default defineComponent({
  name: 'ValidateInput',
  props: {
    rule: {
      type: Array as PropType<RulesProp>
    },
    tag: {
      type: String as PropType<tag>,
      default: 'input'
    },
    modalValue: String
  },
  inheritAttrs: false,
  setup(prop, context) {
    const inputRef = reactive({
      val: '',
      err: false,
      message: ''
    })
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    const validateInput = () => {
      if (prop.rule) {
        const allPassed = prop.rule.every(rule => {
          let pass = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              pass = inputRef.val.trim() !== ''
              break
            case 'email':
              pass = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return pass
        })
        inputRef.err = !allPassed
        return allPassed
      }
      return true
    }

    onMounted(() => {
      emitter.emit('form-item-create', validateInput)
    })
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>

<style></style>
