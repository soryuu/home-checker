<template>
  <div class="select-wrapper">
    <section>
      <h1>Проверьте заказ</h1>
      <div class="results-block">
        <p>Мы нашли несколько подходящих вариантов по вашему запросу: г. Москва, улица Пушкина, д. 13</p>
        <table>
          <tr>
            <th>Кадастровый номер</th>
            <th>Адрес объекта</th>
          </tr>
          <tr class="table-content">
            <td>59:07:2540101:111</td>
            <td>г. Москва, улица Пушкина, д.13, кв. 666</td>
          </tr>
          <tr class="table-content">
            <td>59:07:2540101:111</td>
            <td>г. Москва, улица Пушкина, д.13, кв. 666</td>
          </tr>
          <tr class="table-content">
            <td>59:07:2540101:111</td>
            <td>г. Москва, улица Пушкина, д.13, кв. 666</td>
          </tr>
          <tr class="table-content">
            <td>59:07:2540101:111</td>
            <td>г. Москва, улица Пушкина, д.13, кв. 666</td>
          </tr>
        </table>
        <p class="hint top-hint">
          Изменить запрос
        </p>
        <p class="hint bottom-hint">
          Не нашли, что искали? Попробуйте изменить запрос
        </p>
      </div>
    </section>
    <ChooseSection />
  </div>
</template>

<style lang="scss">
.select-wrapper {
    background: linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(79.12deg, rgba(89, 158, 236, 0.216) 17.96%, rgba(38, 108, 188, 0.3) 60.77%, rgba(1, 78, 166, 0.3) 82.04%), #FFFFFF;
    padding: 0 40px;
    padding-bottom: 80px;
    section {
        padding-top: 70px;
        h1 {
            color:#014EA6;
        }
    }
    .results-block {
        display: flex;
        background: #FFFFFF;
        font-size: 20px;
        margin-top: 40px;
        padding: 34px 40px 60px 40px;
        border-radius: 40px;
        flex-direction: column;
        position: relative;
        .bottom-hint {
            position: absolute;
            bottom: 10px;
            right: 40px;
        }
        .top-hint {
            position: absolute;
            top: 34px;
            right: 40px;
        }
        .hint {
            font-size: 15px;
            color: #646464;
        }
        p {
            font-weight: 500;
        }
        table {
            margin: 26px 0;
            border-spacing: 0;
            th {
                text-align: left;
                font-weight: normal;
                color: #646464;
                padding: 10px 0;
            }
            td {
                padding: 10px 0;
            }
        }
    }
}
</style>

<script>
import ChooseSection from '~/components/MainPage/ChooseSection'
export default {
  components: {
    ChooseSection
  }
}
</script>
