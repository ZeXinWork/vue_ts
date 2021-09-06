<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <column-list :list="list"></column-list>
    <form action="">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <validate-input :rule="emailRules" v-model="emailValue" placeholder="请输入邮箱地址"></validate-input>
        {{ emailValue }}
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入密码" />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnListProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
import { emailReg } from './utils/reg'
const testData: ColumnListProps[] = [
  {
    id: 1,
    title: 'title1专栏',
    description: '这是test3的专栏，有一段简介,哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
    avatar: 'https://img2.baidu.com/it/u=3355464299,584008140&fm=26&fmt=auto&gp=0.jpg'
  },
  {
    id: 2,
    title: 'title2专栏',
    description: '这是test3的专栏，有一段简介,哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
    avatar: 'https://img2.baidu.com/it/u=3355464299,584008140&fm=26&fmt=auto&gp=0.jpg'
  },
  {
    id: 3,
    title: 'title3专栏',
    description: '这是test3的专栏，有一段简介,哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
    // avatar: 'https://img2.baidu.com/it/u=3355464299,584008140&fm=26&fmt=auto&gp=0.jpg'
  },
  {
    id: 4,
    title: 'title4专栏',
    description: '这是test3的专栏，有一段简介,哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
    avatar: 'https://img2.baidu.com/it/u=3355464299,584008140&fm=26&fmt=auto&gp=0.jpg'
  },
  {
    id: 5,
    title: 'title5专栏',
    description: '这是test3的专栏，有一段简介,哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
    avatar: 'https://img2.baidu.com/it/u=3355464299,584008140&fm=26&fmt=auto&gp=0.jpg'
  }
]
const currentUser: UserProps = {
  isLogin: true,
  name: '迪达拉',
  id: 1
}
export default defineComponent({
  name: 'App',
  components: { ColumnList, GlobalHeader, ValidateInput },
  setup() {
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
    return {
      list: testData,
      user: currentUser,
      emailRef,
      validateEmail,
      emailRules,
      emailValue
    }
  }
})
</script>

<style>
img {
  width: 56px;
}
</style>
