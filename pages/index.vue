/* eslint-disable */
<template>
  <div>
    <div class="inner-wrapper">
      <div class="content-wrapper">
        <div class="input-tile">
          <h1>Юридическая проверка<br>недвижимости</h1>
        </div>
        <div class="input-block">
          <multiselect
            v-model="value"
            track-by="address"
            class="multiselect"
            label="address"
            :options="options"
            :searchable="true"
            :close-on-select="true"
            :show-labels="false"
            placeholder="Введите адрес или кадастровый номер"
            :internal-search="false"
            @search-change="asyncFind"
          />
          <button class="button--green input-block__search" @click="handleSearch">
            Найти >
          </button>
        </div>
      </div>
    </div>
    <div class="container">
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
            <v-btn text color="primary">
              <nuxt-link v-if="item.egrn" :to="'/kadastr/' + prepareEgrn.toQs(item.egrn)">
                Выбрать >
              </nuxt-link>
            </v-btn>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
    <MainInfo />
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import axios from 'axios'
import * as __ from 'lodash'
import MainInfo from '~/components/MainPage/MainInfo'
import { prepareEgrn } from '@/libs/helpers'

export default {
  components: {
    Multiselect,
    MainInfo
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
  padding: 160px 40px 60px 40px;
  display: flex;
  background-color: #ccdced;
  background: url("/img/main-page-bg.png") no-repeat #ccdced 100% 100%;
  background-size: 60%;
  .content-wrapper {
    display: flex;
    flex-direction: column;
    width: 65%;
    .input-tile {
      color: #014EA6;
      text-align: left;
    }
    .input-block {
      margin: 70px 0;
      display: flex;
      font-size: 20px;
      .multiselect {
        position: relative;
        &__tags {
          font-size: 20px;
          border-radius: 40px;
          padding: 27px 20px 27px 50px;
        }
        &__placeholder {
          margin-bottom: 0;
          padding: 0;
          color: #000;
        }
      }
      &__search {
        font-weight: bold;
        white-space: nowrap;
        font-size: 20px;
        height: 60px;
        width: 200px;
        border-radius: 35px;
        margin-left: -210px;
        z-index: 1;
        margin-top: 10px;
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
