<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#" @click="resetRouter">者也专栏</a>
    <ul v-if="!user || (user && user.isLogin)" class="list-inline mb-0">
      <li class="list-inline-item">
        <a class="btn btn-outline-light my-2" @click="gotoLogin">登录</a>
      </li>
      <li class="list-inline-item">
        <a class="btn btn-outline-light my-2" @click="gotoLogin">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <Dropdown :title="`你好，${user && user.name}`">
          <dropdown-item>
            <a href="#" class="dropdown-item">新建文章</a>
          </dropdown-item>
          <dropdown-item disabled>
            <a href="#" class="dropdown-item">编辑资料</a>
          </dropdown-item>
          <dropdown-item>
            <a href="#" class="dropdown-item">退出登录</a>
          </dropdown-item>
        </Dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
import { resetRouter } from '../utils'

export interface UserProps {
  isLogin: boolean
  name: string
  id?: number
}

const useLoginEffect = () => {
  const router = useRouter()
  const gotoLogin = () => {
    router.push('/login')
  }
  return { gotoLogin }
}

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      requierd: true
    }
  },
  components: {
    Dropdown,
    DropdownItem
  },
  setup() {
    const { gotoLogin } = useLoginEffect()
    return { resetRouter, gotoLogin }
  }
})
</script>

<style></style>
