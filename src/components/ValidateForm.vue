<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="handlerForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary"></button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()
export type validateFunction = () => boolean
export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup(props, context) {
    let validateArray: validateFunction[] = []
    const handlerForm = () => {
      const result = validateArray.map(func => func()).every(res => res)
      context.emit('form-submit', result)
    }
    const callbackFuntion = (func: validateFunction) => {
      validateArray.push(func)
    }
    emitter.on('form-item-create', callbackFuntion as any)

    onUnmounted(() => {
      emitter.off('form-item-create', callbackFuntion as any)
      validateArray = []
    })
    return { handlerForm }
  }
})
</script>

<style></style>
