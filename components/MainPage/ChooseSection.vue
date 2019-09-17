<template>
  <section class="prices">
    <h1>Тарифы и цены</h1>
    <div class="cards-block">
      <div class="cards-block__advanced">
        <h2>Пакет "Продвинутый"</h2>
        <div class="cards-options">
          <ul>
            <li>Выписка из ЕГРН об объекте недвижимости</li>
            <li>Справка об обременениях</li>
            <li>Справка о переходах права собственности</li>
            <li>Судебные дела по недвижимости</li>
            <li>Проверка на наличие залога</li>
            <li>Проверка на нарушения закона и розыск</li>
            <li>Участие в спорах и наличие претензий</li>
            <li>Проверка на наличие ареста недвижимости</li>
          </ul>
          <p class="time">
            Срок: 24 часа <span>(максимум 72 часа)</span>
          </p>
        </div>
        <button class="button--green cards-block__button" @click="handleSearch">
          От 4000 ₽
        </button>
      </div>
      <div class="cards-block__basic">
        <h2>Пакет "Базовый"</h2>
        <div class="cards-options">
          <ul>
            <li>Выписка из ЕГРН об объекте недвижимости</li>
            <li>Справка об обременениях</li>
            <li>Справка о переходах права собственности</li>
            <li class="uncheck">
              Судебные дела по недвижимости
            </li>
            <li class="uncheck">
              Проверка на наличие залога
            </li>
            <li class="uncheck">
              Проверка на нарушения закона и розыск
            </li>
            <li class="uncheck">
              Участие в спорах и наличие претензий
            </li>
            <li class="uncheck">
              Проверка на наличие ареста недвижимости
            </li>
          </ul>
          <p class="time">
            Срок: 24 часа <span>(максимум 72 часа)</span>
          </p>
        </div>
        <button class="button--inverse cards-block__button" @click="handleSearch">
          От 500 ₽
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
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
</style>
