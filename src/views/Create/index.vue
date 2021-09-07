<template>
  <validate-form @form-submit="onFormSubmit">
    <div class="mb-3">
      <label for="exampleInputtitle1" class="form-label">文章标题</label>
      <validate-input :rule="titleRules" v-model="titleValue" placeholder="请输入文章标题"></validate-input>
      {{ titleValue }}
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">文章内容</label>
      <validate-input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="请输入文章内容"
        :rule="contentRules"
        rows="10"
      />
    </div>
    <template #submit> <button type="submit" class="btn btn-danger">Submit</button></template>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ValidateInput, { RulesProp } from '../../components/ValidateInput.vue'
import ValidateForm from '../../components/ValidateForm.vue'

const usetitleEffect = () => {
  const titleValue = ref('')
  const titleRules: RulesProp = [
    {
      type: 'required',
      message: '文章标题不能为空'
    }
  ]

  return {
    titleValue,
    titleRules
  }
}

const usePasswordEffect = () => {
  const contentRules: RulesProp = [
    {
      type: 'required',
      message: '文章内容不能为空'
    }
  ]
  return { contentRules }
}

const useFormSubmit = () => {
  const router = useRouter()
  const store = useStore()
  const onFormSubmit = (result: boolean) => {
    if (result) {
      router.push('/')
      store.commit('login')
    }
  }
  return { onFormSubmit }
}

export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {
    const { titleValue, titleRules } = usetitleEffect()
    const { contentRules } = usePasswordEffect()
    const { onFormSubmit } = useFormSubmit()
    return {
      onFormSubmit,
      titleValue,
      contentRules,
      titleRules
    }
  }
})
</script>

<style></style>
