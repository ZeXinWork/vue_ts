<template>
  <validate-form @form-submit="onFormSubmit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <validate-input
        :rule="emailRules"
        v-model="emailValue"
        placeholder="请输入邮箱地址"
        ref="inputRef"
      ></validate-input>
      {{ emailValue }}
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <validate-input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="请输入密码"
        :rule="passwordRules"
      />
    </div>
    <template #submit> <button type="submit" class="btn btn-danger">Submit</button></template>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ValidateInput, { RulesProp } from '../../components/ValidateInput.vue'
import ValidateForm from '../../components/ValidateForm.vue'
import { emailReg } from '@/utils/reg'

const useEmailEffect = () => {
  const emailRef = reactive({
    val: '',
    err: false,
    message: ''
  })
  const emailValue = ref('')
  const emailRules: RulesProp = [
    {
      type: 'required',
      message: '电子邮箱地址不能为空'
    },
    {
      type: 'email',
      message: '请输入正确的电子邮箱格式'
    }
  ]
  const validateEmail = () => {
    if (emailRef.val.trim() === '') {
      emailRef.err = true
      emailRef.message = 'can no be empty'
    } else if (!emailReg.test(emailRef.val)) {
      emailRef.err = true
      emailRef.message = 'should be valid email'
    }
  }
  const inputRef = ref<any>(null)
  return {
    emailValue,
    emailRules,
    validateEmail,
    inputRef
  }
}

const usePasswordEffect = () => {
  const passwordRules: RulesProp = [
    {
      type: 'required',
      message: '密码不能为空'
    }
  ]
  return { passwordRules }
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
    const { emailValue, emailRules, validateEmail, inputRef } = useEmailEffect()
    const { passwordRules } = usePasswordEffect()
    const { onFormSubmit } = useFormSubmit()
    return {
      onFormSubmit,
      emailValue,
      passwordRules,
      emailRules,
      validateEmail,
      inputRef
    }
  }
})
</script>

<style></style>
