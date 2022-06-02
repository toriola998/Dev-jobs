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

        <div class="search-wrap flex">
            <input placeholder="Filter by title"/>

            <div class="flex">
                <button>
                    <img src="./../assets/mobile/icon-filter.svg" 
                        alt="click to filter by location and fulltime" 
                        width="20" height="20"/>
                </button>
                <button class="blue-search flex">
                    <img src="./../assets/mobile/icon-search.svg" alt="search by title"/>
                </button>
            </div>
        </div>
    </header>

    <main>

    </main>
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
        background-color: #F4F6F8;
        height: 100vh;
    }

    input,
    button {
        border: 0;
        outline: 0;
        background-color: transparent;
    }

    .search-wrap {
        background-color: white;
        height: 4rem;
        border-radius: 5px;
        padding: 0 1rem;
        position: relative;
        top: 3rem;
    }

    .search-wrap input::placeholder {
        font-family: 'Kumbh Sans', sans-serif;
    }

    .blue-search {
        background-color: #5964E0;
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 5px;
        justify-content: center;
        margin-left: 1rem;
    }
</style>