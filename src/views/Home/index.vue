<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../../assets/callout.svg" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list>
    <button class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25" @click="loadMorePage" v-if="!isLastPage">
      加载更多
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnListProps } from '../../components/ColumnList.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup() {
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
    return {
      list: testData
    }
  }
})
</script>
