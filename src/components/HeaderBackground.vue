<template>
    <div class="header-bg">
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
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .header-bg {
        background: url('./../assets/mobile/bg-pattern-header.svg');
        background-color: var(--blue);
        width: 100%;
        height: 9rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 1.5rem 1.5rem 0;
    }

    .header-bg > div {
        justify-content: space-between; 
    }

@media only screen and (min-width: 720px) {
    .header-bg {
        padding: 2rem 3rem 0;
        background: url('./../assets/tablet/bg-pattern-header.svg');
    }
}

@media only screen and (min-width: 900px) {
    .header-bg {
        padding: 3rem 8rem 0;
        background: url('./../assets/desktop/bg-pattern-header.svg');
        height: 10rem;
    }
}

@media only screen and (min-width: 1200px) {
    .header-bg > div {
       max-width: 1330px;
       margin: auto;
    }
}
</style>