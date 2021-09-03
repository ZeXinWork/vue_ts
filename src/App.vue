<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnListProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
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
  components: { ColumnList, GlobalHeader },
  setup() {
    return {
      list: testData,
      user: currentUser
    }
  }
})
</script>

<style>
img {
  width: 56px;
}
</style>
