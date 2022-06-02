<template>
    <header>
        <div class="flex">
            <router-link to="/">
                <img src="./../assets/desktop/logo.svg" 
                    alt="devjobs - Home"
                    width="112" height="32"/>
            </router-link>

            <div class="flex">
                <img src="./../assets/desktop/icon-sun.svg" 
                     alt="light mode on" 
                     width="20" height="19"/>
                <img src="./../assets/desktop/icon-moon.svg" 
                     alt="dark mode on" 
                     width="12" height="12" />
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    header {
        background: url('./../assets/mobile/bg-pattern-header.svg');
        width: 100%;
        height: 8rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 1.5rem 1.5rem 0;
    }

    header > div {
        justify-content: space-between; 
    }

    main {
        background-color: #F2F2F2;
    }
</style>