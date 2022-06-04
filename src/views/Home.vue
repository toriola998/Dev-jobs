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

        <form>
            <div class="search-wrap flex">
                <label for="job-title" hidden>Job title</label>
                <input placeholder="Filter by title" type="text" id="job-title" />

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
            
            <div class="overlay flex">
                <div class="location-job-type"> 
                    <div class="flex">
                        <img src="./../assets/desktop/icon-location.svg" alt="" />
                        <label for="location" hidden> Location</label>
                        <input placeholder="Filter by location..." type="text" id="location" />
                    </div>

                    <div class="checkbox-wrap">
                        <input type="checkbox" id="full-time" />
                        <label for="full-time" class="checkbox"> Full time only</label>
                    </div>
                    <button type="submit" class="search-btn flex"> Search </button>
                </div>
            </div>
        </form>
    </header>

    <main>
        <div class="each-job">
            <div class="flex logo-bg">
                <img src="./../assets/logos/scoot.svg" alt="company logo" />
            </div>
            <p class="time-wrap">
                <span class="time">5h ago</span>
                <span class="job-type">Full time</span>
            </p> 
            <h2>Senior Software Engineer</h2>
            <p class="company-name"> Scoot</p>
            <p class="company-location"> United Kingdom </p>
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
    :root {
        --black: #19202D;
        --blue: #5964E0;
        --grey: #6E8098;
    }
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

    input::placeholder {
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
/**MAIN STYLING STARTS */
    main {
        background-color: #F4F6F8;
        height: 100vh;
        padding: 6rem 1.5rem 0;
    }

    .each-job,
    .location-job-type {
        background-color: #fff;
        padding: 0 1.5rem 2rem;
        border-radius: 7px;
    }

    .logo-bg {
        height: 3rem;
        width: 3rem;
        border-radius: 15px;
        justify-content: center;
        background-color: red;
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
    }

    .company-location {
        color: #5964E0;
        font-weight: 700;
        font-size: .9rem;
        margin-top: 2rem;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        width: 100%;
        height: 100%;
        justify-content: center;
        background-color: rgba(0,0,0, 0.5);
    }

    .location-job-type {
        margin-top: 4rem;
        width: 300px;
    }

    .location-job-type > div.flex {
        padding-top: 1rem;
    }

    .checkbox-wrap::before {
        display: block;
        content: '';
        width: 100%;
        height: 1px;
        background-color: #6E8098;
        opacity: 0.5;
        margin: 2rem 0;
    }

    .location-job-type > div.flex > img {
        margin-right: 1rem;
    }

    .checkbox {
        color: var(--black);
        font-weight: 700;
        margin-left: .8rem;
    }

    .search-btn {
        background-color: #5964E0;
        color: #fff;
        width: 100%;
        height: 3rem;
        font-weight: 700;
        font-size: 1rem;
        justify-content: center;
        border-radius: 5px;
        margin-top: 1.4rem;
    }
</style>