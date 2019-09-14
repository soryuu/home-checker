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
            :preserve-search="true"
            :options="options"
            :searchable="true"
            :allow-empty="false"
            open-direction="bottom"
            :close-on-select="true"
            :clear-on-select="false"
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
      console.log(this.value)
      axios
        .post('/api/rosreestr/search', { query: this.value })
        .then(({ data }) => {
          this.results = data.items
        })
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
        .multiselect__option {
          padding: 10px 40px;
          font-size: 20px;
        }
        .multiselect__option--highlight {
          background: #F2F6FB;
          color: #000;
          font-weight: 500;
        }
        &.multiselect--active {
          position: relative;
          .multiselect__tags::before {
            content: url(/img/map-icon.png);
            position: absolute;
            left: 45px;
          }
          .multiselect__tags::after {
            content: 'Выберите из списка или продолжите ввод';
            margin-left: -50px;
            margin-top: 35px;
            display: block;
            color: #646464;
          }
          .multiselect__tags {
            border-top-left-radius: 40px;
            border-top-right-radius: 40px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            font-size: 22px;
            padding-bottom: 15px;
            .multiselect__input {
              margin-bottom: 0;
              font-size: 20px;
            }
            .multiselect__input::placeholder {
              display: none;
              position: absolute;
              font-size: 12px;
              top: 0px;
              left: 20px;
              margin-bottom: 20px;
            }
          }
          .multiselect__content-wrapper {
            margin-top: -5px;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
          }
        }
        &__tags {
          font-size: 20px;
          border-radius: 40px;
          padding: 27px 20px 27px 90px;
          ::before {
            content: url(/img/map-icon.png);
            position: absolute;
            left: 45px;
          }
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
        z-index: 51;
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
