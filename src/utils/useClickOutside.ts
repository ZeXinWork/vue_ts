import { ref, onUnmounted, onMounted, Ref } from 'vue'

export const useClickOutside = (ElementRef: Ref<null | HTMLElement>) => {
  const isOutside = ref(false)
  const handler = (e: MouseEvent) => {
    if (ElementRef.value) {
      ElementRef.value.contains(e.target as HTMLElement) ? (isOutside.value = false) : (isOutside.value = true)
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return { isOutside }
}
