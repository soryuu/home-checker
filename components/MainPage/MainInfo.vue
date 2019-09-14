<template>
  <div class="info-block">
    <section class="reasons">
      <h1>Зачем проверять квартиру у нас</h1>
      <p class="text">
        Нередко случается, что счастливый покупатель квартиры, вступив в собственность, находит “скелеты в шкафу” в виде задолженностей по счетам, дальних родственников предыдущего владельца, претендующих на жилплощадь, проблемы с законом у продавца и так далее. В подобных ситуациях велика вероятность лишиться дорогостоящей покупки без какой-либо компенсации даже спустя несколько лет после сделки, и адвокаты здесь бессильны.
        <br>
        <br>
        Мы предлагаем защиту ваших вложений в будущее: тщательная проверка дома, квартиры, настоящих и прошлых владельцев. Вы сами выбираете параметры и глубину проверки. А мы используем государственные базы и экспертов в юридических вопросах, которые выявят риски и предоставят результат в форме удобного и понятного отчета.
      </p>
    </section>
    <ChooseSection />
    <section class="faq">
      <h1>Вопросы и ответы</h1>
      <div class="qa-block">
        <h2>Какие гарантии дает проверка недвижимости?</h2>
        <p>
          Ответ на вопрос. Мы предлагаем защиту ваших вложений в будущее: щательная<br>
          проверка юристами дома, квартиры, настоящих и прошлых владельцев. Вы сами<br>
          выбираете, какие документы
        </p>
      </div>
      <div class="qa-block">
        <h2>Могу ли я проверить квартиру самостоятельно?</h2>
        <p>
          Ответ на вопрос. Мы предлагаем защиту ваших вложений в будущее: щательная<br>
          проверка юристами дома, квартиры, настоящих и прошлых владельцев. Вы сами<br>
          выбираете, какие документы
        </p>
      </div>
      <div class="qa-block">
        <h2>Я беру ипотеку, значит, мне не нужно ничего проверять?</h2>
        <p>
          Ответ на вопрос. Мы предлагаем защиту ваших вложений в будущее: щательная<br>
          проверка юристами дома, квартиры, настоящих и прошлых владельцев. Вы сами<br>
          выбираете, какие документы
        </p>
      </div>
      <div class="qa-block">
        <h2>Я лично знаю продавца, зачем мне его проверять?</h2>
        <p>
          Ответ на вопрос. Мы предлагаем защиту ваших вложений в будущее: щательная<br>
          проверка юристами дома, квартиры, настоящих и прошлых владельцев. Вы сами<br>
          выбираете, какие документы
        </p>
      </div>
    </section>
    <section class="partners">
      <h1>Наши партнеры</h1>
      <div class="partners__logos">
        <div class="logo">
          <img src="/img/partner1-logo.png">
          <p>Госреестр<br>банкротов</p>
        </div>
        <div class="logo">
          <img src="/img/partner2-logo.png">
          <p>МВД<br>России</p>
        </div>
        <div class="logo">
          <img src="/img/partner3-logo.png">
          <p>Министерство <br> экономического <br> развития РФ</p>
        </div>
        <div class="logo">
          <img src="/img/partner4-logo.png">
          <p>Министерство<br>юстиции<br>Российской<br>Федерации</p>
        </div>
        <div class="logo">
          <img src="/img/partner5-logo.png">
          <p>Федеральная<br>налоговая службюа</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.info-block {
  position: relative;
  padding: 0 40px;
  background-color: #fff;
  section {
    padding-top: 70px;
  }
  .partners {
    padding-bottom: 80px;
    &__logos {
      margin-top: 40px;
      display: flex;
      text-align: center;
      justify-content: space-between;
    }
  }
  .reasons {
    .text {
      margin-top: 40px;
      width: 70vw;
    }
  }
  .faq {
    .qa-block {
      margin-top: 40px;
      h2 {
        color: #014EA6;
        font-weight: 500;
      }
      p {
        margin-top: 10px;
        width: 70vw;
      }
    }
  }
  .prices {
    h2 {
      font-size: 30px;
      font-weight: bold;
    }
    ul {
      padding-inline-start: 20px;
    }
    .cards-block {
      display: flex;
      margin-top: 40px;
      &__button {
        margin-top: 75px;
        width: 200px;
        align-self: center;
        border-radius: 35px;
        font-size: 20px;
        font-weight: 700;
        padding: 15px 50px;
        white-space: nowrap;
      }
      .cards-options {
        font-size: 20px;
        ul {
          padding: 18px 20px 0 25px;
          font-weight: 500;
          li {
            margin: 12px 0;
            list-style-image: url(/img/check-icon.png);
          }
          .uncheck {
            list-style-image: url(/img/x-icon.png);
          }
        }
        .time {
          font-weight: 700;
          margin-left: 25px;
          span {
            font-weight: normal;
          }
        }
      }
      &__advanced {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-right: 60px;
        padding: 40px 30px;
        background:#014EA6;
        border-radius: 20px;
        color: #fff;
      }
      &__basic {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 40px 30px;
        background:#F2F6FB;
        border-radius: 20px;
      }
    }
  }
}
</style>

<script>
import ChooseSection from './ChooseSection'
export default {
  components: {
    ChooseSection
  }
}
</script>
