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
            --lightBlue: #e9ebfd;
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

    .time-wrap,
    .company-name {
        color: #6E8098;
        font-size: 1rem;
    }

    .time::after {
        display: inline-block;
        content: '';
        background-color: #6E8098;
        height: 3px;
        width: 3px;
        margin: 0 .7rem;
    }

    h2 {
        font-size: 1.1rem;
        font-weight: 700;
        margin: .8rem 0;
        color: var(--black);
    }

    .company-location {
        color: #5964E0;
        font-weight: 700;
        font-size: .9rem;
    }
</style>
