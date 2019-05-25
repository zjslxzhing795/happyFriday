<template>
  <div>
    {{level}}   <!--第一周-->
    <div class="home_logo"></div>  <!--开始按钮-->
    <router-link to="item" class="start"></router-link>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data: {}
  }
</script>

<style scoped>
  /*.home_logo {
    background-image: url(../assets/1-2.png);
    background-size: 13.142rem 100%;
    background-position: right center;
  }

  .start {
    background-image: url(../assets/1-4.png);
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    background-size: 100% 100%;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.4rem;
    background-repeat: no-repeat;
  }*/
</style>
