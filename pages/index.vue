/* eslint-disable */
<template>
  <div class="inner-wrapper">
    <div class="content-wrapper">
      <div class="input-tile">
        <h1>Введите адрес или кадастровый номер</h1>
      </div>
      <div class="input-block">
        <multiselect
          v-model="value"
          track-by="address"
          label="address"
          :options="options"
          :searchable="true"
          :close-on-select="true"
          :show-labels="false"
          placeholder="Pick a value"
          :internal-search="false"
          @search-change="asyncFind"
        />
        <button class="button--green input-block__search" @click="handleSearch">
          Найти объект
        </button>
      </div>
      <v-simple-table v-if="results.length">
        <thead>
          <tr>
            <th class="text-left">
              Кадастровый номер
            </th>
            <th class="text-left">
              Адрес
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in results" :key="item.egrn">
            <td>{{ item.egrn }}</td>
            <td>{{ item.address }}</td>
            <nuxt-link v-if="item.egrn" :to="'/kadastr/' + prepareEgrn.toQs(item.egrn)">
              Выбрать >
            </nuxt-link>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import axios from 'axios'
import * as __ from 'lodash'
import { prepareEgrn } from '@/libs/helpers'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      value: null,
      options: [],
      isLoading: false,
      results: [],
      prepareEgrn
    }
  },
  methods: {
    asyncFind: __.debounce(function (query) {
      this.isLoading = true
      axios.post('/api/rosreestr/hint', { query }).then(({ data }) => {
        this.isLoading = true
        this.options = data.items
      })
    }, 2000),
    handleSearch () {
      axios
        .post('/api/rosreestr/search', { query: this.value })
        .then(({ data }) => { this.results = data.items })
    }
  }
}
</script>

<style lang="scss">
.inner-wrapper {
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(17, 85, 204);
  .content-wrapper {
    display: flex;
    flex-direction: column;
    width: 70%;
    .input-tile {
      color: #fff;
    }
    .input-block {
      margin: 30px 0;
      display: flex;
      width: 100%;
      &__select {
        flex-grow: 1;
        margin-right: 20px;
        width: 70%;
        .vs__dropdown-toggle {
          background: #fff;
          height: 42px;
        }
      }
      &__search {
        font-weight: 500;
        white-space: nowrap;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
