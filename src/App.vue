<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Kumbh Sans', sans-serif;
}

a {
    text-decoration: none;
}

:root {
        --black: #19202D;
        --blue: #5964E0;
        --grey: #6E8098;
    }

body {
  background-color: #F4F6F8;
}

.flex {
    display: flex;
    align-items: center;
}

.logo-bg {
    height: 3rem;
    width: 3rem;
    border-radius: 15px;
    justify-content: center;
    position: relative;
    bottom: 1.5rem;
}
</style>
