<template>
  <div class="footer-wrapper">
    <div>
      <img src="/img/logo-footer.png">
    </div>
    <div class="nav-bar">
      <div class="nav-bar__link">
        Условия предоставление услуг
      </div>
      <div class="nav-bar__link">
        О нас
      </div>
      <div class="nav-bar__link">
        Тарифы
      </div>
      <div class="nav-bar__link">
        Вопросы
      </div>
      <div class="nav-bar__link">
        Партнеры
      </div>
      <div class="nav-bar__link">
        Отзывы
      </div>
    </div>
  </div>
</template>

<style lang="scss">
    .footer-wrapper {
        display: flex;
        background-color: #F2F6FB;
        justify-content: space-between;
        padding: 50px 40px;
        .nav-bar {
            display: flex;
            list-style: none;
            align-self: flex-end;
            font-weight: 500;
            color: #014EA6;
            &__link {
                margin: 0 20px;
                cursor: pointer;
            }
        }
    }
</style>
