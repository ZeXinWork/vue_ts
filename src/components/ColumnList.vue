<template>
  <div v-if="columnList && columnList.length > 0" class="row">
    <div v-for="column of columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm" style="width: 18rem">
        <div class="card-body text-center">
          <img :src="column.avatar" class="rounded-circle border border-light w-25 my-3" :alt="column.title" />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">
            {{ column.description }}
          </p>
          <router-link class="btn btn-outline-primary" :to="`/column/${column.id}`">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

// 定义ColumnList数组中每一项的对象属性
export interface ColumnListProps {
  id: number
  avatar?: string
  title: string
  description: string
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnListProps[]>, // 定义list类型
      require: true
    }
  },
  setup(props) {
    const columnList = props.list?.map(item => {
      if (!item.avatar) {
        item.avatar = require('@/assets/column.jpg')
      }
      return item
    })
    return {
      columnList
    }
  }
})
</script>

<style>
img {
  width: 100%;
}
</style>
