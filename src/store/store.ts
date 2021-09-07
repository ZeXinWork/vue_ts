import { testData, testPosts, ColumnProps, PostProps } from '@/testData'
import { createStore } from 'vuex'

interface User {
  isLogin: boolean
  name?: string
  id?: number
}
export interface GlobalDataProps {
  columns: ColumnProps[]
  posts: PostProps[]
  user: User
}
const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: '迪达拉' }
    },
    logout(state) {
      state.user = { ...state.user, isLogin: false, name: '' }
    }
  },
  getters: {
    getColumns: state => (id: number) => state.columns.find(cid => cid.id === id),
    getDetail: state => (id: number) => state.posts.filter(cid => cid.columnId === id)
  }
})
export default store
