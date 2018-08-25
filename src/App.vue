<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.flex-center {
  display: flex;
  justify-content: center;
}
.card-header {
  display: flex;
  justify-content: space-around;
  .nav-link {
    color: green;
    margin-left: 3vw;
    margin-right: 3vw;
    .active {
      background-color: pink;
    }
  }
}
.sorting {
  text-align: center;
}

td {
  text-align: center !important
}
</style>
