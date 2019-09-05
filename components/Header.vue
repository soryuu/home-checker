<template>
  <div class="wrapper">
    <div class="logo-block">
      <img class="logo-block__image" src="/img/logo.png">
    </div>
    <div class="nav-block">
      <ul class="nav-bar">
        <li class="nav-bar__link">
          О нас
        </li>
        <li class="nav-bar__link">
          Тарифы
        </li>
        <li class="nav-bar__link">
          Вопросы
        </li>
        <li class="nav-bar__link">
          Партнеры
        </li>
        <li class="nav-bar__link">
          Отзывы
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
    display: flex;
    padding: 20px 40px;
    background: #ccdced;
    justify-content: space-between;
    align-items: flex-end;
    color: #014EA6;
    font-weight: bold;
    font-size: 15px;
      .logo-block {
          position: relative;
          &__image {
              width: 100%;
          }
      }
      .nav-block {
          position: relative;
          .nav-bar {
              padding: 0;
              display: flex;
              margin-bottom: 2px;
              &__link {
                  list-style-type: none;
                  margin: 0 20px;
                  cursor: pointer;
              }
          }
      }
}
</style>
