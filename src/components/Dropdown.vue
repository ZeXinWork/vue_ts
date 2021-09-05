<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{ title }}</a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { useClickOutside } from '../utils/useClickOutside'
import { defineComponent, ref, watch } from 'vue'

const useDropdownEffect = () => {
  const isOpen = ref(false)
  const dropdownRef = ref<null | HTMLElement>(null)
  const toggleOpen = () => {
    isOpen.value = !isOpen.value
  }
  const { isOutside } = useClickOutside(dropdownRef)
  watch(isOutside, () => {
    if (isOutside.value && isOpen.value) {
      isOpen.value = false
    } else {
      isOpen.value = true
    }
  })
  return { toggleOpen, isOpen, dropdownRef }
}
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const { toggleOpen, isOpen, dropdownRef } = useDropdownEffect()
    return { toggleOpen, isOpen, dropdownRef }
  }
})
</script>

<style></style>
