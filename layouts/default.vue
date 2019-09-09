<template>
  <div>
    <Header />
    <div class="main-wrapper">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap&subset=cyrillic')
</style>
<style>
html {
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1 {
  font-size: 40px;
  font-weight: 500;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

button {
  cursor: pointer;
}

.button--green {
  display: inline-block;
  color: #fff;
  border-radius: 4px;
  border: 5px solid #F85B29;
  text-decoration: none;
  padding: 10px 30px;
  background-color: #F85B29;
}

.button--green:hover {
  color: #F85B29;
  background-color: inherit;
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
.button--inverse {
  display: inline-block;
  color: #fff;
  border-radius: 4px;
  border: 5px solid #014EA6;
  text-decoration: none;
  background: inherit;
  color: #014EA6;
}
.main-wrapper {
  background-color: #f7f8f8;
}
</style>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
