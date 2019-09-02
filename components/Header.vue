<template>
  <div class="wrapper">
    <div class="logo-block">
      <img class="logo-block__image" src="/img/logo.png">
    </div>
    <div class="nav-block">
      <ul class="nav-bar">
        <li class="nav-bar__link">
          Проверить
        </li>
        <li class="nav-bar__link">
          Как работает
        </li>
        <li class="nav-bar__link">
          Наша команда
        </li>
        <li class="nav-bar__link">
          FAQ
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fafafa;
    .logo-block {
        position: relative;
        &__image {
            width: 30%;
        }
    }
    .nav-block {
        position: relative;
        width: 50%;
        .nav-bar {
            padding: 0;
            display: flex;
            &__link {
                list-style-type: none;
                margin: 0 15px;
                cursor: pointer;
            }
        }
    }
}
</style>
