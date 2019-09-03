<template>
  <div>
    <div>Hello</div>
    <div v-if="isLoaded">
      Выписка по объекту {{ data.common.address }} - кадастровый номер {{ data.main.egrn }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { prepareEgrn } from '@/libs/helpers'
export default {
  data () {
    return {
      isLoaded: false,
      data: null
    }
  },
  mounted () {
    if (!this.$route.params.kid) {
      return this.$router.push('/')
    }
    axios
      .post('/api/rosreestr/getByEgrn', { query: prepareEgrn.fromQs(this.$route.params.kid) })
      .then(({ data }) => {
        this.isLoaded = true
        this.data = data
      })
  }
}
</script>
