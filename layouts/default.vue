<template>
  <div>
    <Header />
    <div class="main-wrapper">
      <nuxt />
    </div>
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap&subset=cyrillic')
</style>
<style>
html {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #F85B29;
  text-decoration: none;
  padding: 10px 30px;
  background-color: #F85B29;
}

.button--green:hover {
  color: #F85B29;
  background-color: #fff;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.main-wrapper {
  background-color: #f7f8f8;
}
</style>

<script>
import Header from '~/components/Header'
export default {
  components: {
    Header
  }
}
</script>
