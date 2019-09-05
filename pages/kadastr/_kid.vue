<template>
  <div class="container">
    <v-breadcrumbs :items="items" divider="-" />
    <div v-if="isLoaded" class="content-block">
      <div class="content-block__header">
        Выписка по объекту {{ data.common.address }} - кадастровый номер <strong>{{ data.main.egrn }}</strong>
      </div>
      <hr class="divider">
      <div class="content-block__main">
        <div class="info-card">
          <p class="info-card__item">
            Тип: <strong>{{ data.common.type.title }}</strong>
          </p>
          <p class="info-card__item">
            Статус: <strong>{{ data.common.status.title }}</strong>
          </p>
          <p class="info-card__item">
            Кадастровый номер: <strong>{{ data.main.egrn }}</strong>
          </p>
          <p class="info-card__item">
            Регион: <strong>{{ data.cadastre.area.title }}</strong>
          </p>
          <p class="info-card__item">
            Почтовый индекс: <strong>{{ data.common.postcode }}</strong>
          </p>
          <p class="info-card__item">
            Адрес полный: <strong>{{ data.common.address }}</strong>
          </p>
          <p class="info-card__item">
            Адрес по документам: {{ data.common.address_docs }}
          </p>
          <br>
          <p class="info-card__item">
            Площадь: <strong>{{ data.common.area.value }} {{ data.common.area.okei.title }}</strong>
          </p>
          <p class="info-card__item">
            Дата постановки на учет: <strong>{{ convertUnixTime(data.common.date_registration) }}</strong>
          </p>
          <br>
          <p class="info-card__item">
            Кадастровая стоимость: <strong>{{ data.cadastre.cost }} руб.</strong>
          </p>
          <p class="info-card__item">
            Дата определения стоимости: <strong>{{ convertUnixTime(data.cadastre.date_cost_identify) }}</strong>
          </p>
          <p class="info-card__item">
            Дата внесения стоимости в базу: <strong>{{ convertUnixTime(data.cadastre.date_cost_add) }}</strong>
          </p>
          <br>
          <div>
            <h4>Особые отметки:</h4>
            <p>{{ data.notes[0] }}</p>
          </div>
        </div>
        <div class="owner-card" />
      </div>
    </div>
    <div v-if="!isLoaded" class="content-block">
      <content-loader
        :height="160"
        :width="400"
        :speed="2"
        primary-color="#d5d4d6"
        secondary-color="#bcbbbd"
      >
        <rect
          x="2"
          y="41"
          rx="3"
          ry="3"
          width="226.8"
          height="7.8"
        />
        <rect
          x="2.39"
          y="3"
          rx="3"
          ry="3"
          width="271.7"
          height="20.9"
        />
        <rect
          x="2"
          y="53"
          rx="3"
          ry="3"
          width="226.8"
          height="7.8"
        />
        <rect
          x="2"
          y="77"
          rx="3"
          ry="3"
          width="226.8"
          height="7.8"
        />
        <rect
          x="2"
          y="65"
          rx="3"
          ry="3"
          width="226.8"
          height="7.8"
        />
        <rect
          x="2"
          y="89"
          rx="3"
          ry="3"
          width="226.8"
          height="7.8"
        />
        <rect
          x="2"
          y="105"
          rx="3"
          ry="3"
          width="226.8"
          height="7.8"
        />
        <rect
          x="2"
          y="118"
          rx="3"
          ry="3"
          width="226.8"
          height="7.8"
        />
      </content-loader>
    </div>
  </div>
</template>

<style lang="scss">
.content-block {
  background-color: #fff;
  padding: 30px;
  &__header {
    font-size: 22px;
  }
  &__main {
    display: flex;
    margin: 20px 0;
    .info-card {
      display: flex;
      flex-direction: column;
      &__item {
        margin: 5px 0;
      }
    }
  }
  .divider {
    margin: 20px 0;
  }

}
</style>

<script>
import axios from 'axios'
import { ContentLoader } from 'vue-content-loader'
import { convertUnixTime, prepareEgrn } from '@/libs/helpers'

export default {
  components: {
    ContentLoader
  },
  data () {
    return {
      isLoaded: false,
      data: null,
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        }
      ]
    }
  },
  mounted () {
    if (!this.$route.params.kid) {
      return this.$router.push('/')
    }
    axios
      .post('/api/rosreestr/getByEgrn', { query: prepareEgrn.fromQs(this.$route.params.kid) })
      .then(({ data }) => {
        this.data = data
        this.isLoaded = true
        this.items.push({
          text: data.common.address,
          disabled: true,
          href: '/'
        })
      })
  },
  methods: {
    convertUnixTime
  }
}
</script>
