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

        <form @submit.prevent="">
            <div class="search-wrap flex">
                <div class="flex">
                    <img src="./../assets/desktop/icon-search.svg" alt=""
                        width="20" height="20" class="tab-search"/>
                    <label for="job-title" hidden>Job title</label>
                    <input placeholder="Filter by title..." type="text" id="job-title" />
                </div>
                <div class="flex filter-search">
                    <button @click="showOverlay = !showOverlay">
                        <img src="./../assets/mobile/icon-filter.svg" 
                            alt="click to filter by location and fulltime" 
                            width="20" height="20"/>
                    </button>
                    <button class="blue-search flex">
                        <img src="./../assets/mobile/icon-search.svg" alt="search by title"/>
                    </button>
                </div>
            </div>
            
            <div class="overlay flex" v-show="showOverlay" @click.self="showOverlay = !showOverlay">
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
                    <button class="search-btn flex"> Search </button>
                </div>
            </div>
        </form>
    </header>

    <main>
        <div class="job-container">
            <div class="each-job" v-for="job in jobs" :key="job.id">
                <div class="flex logo-bg" :style="{backgroundColor: job.logoBackground}">
                    <img :src="require(`@/assets/${job.logo}`)" alt="company logo" />
                </div>
                <p class="time-wrap">
                    <span class="time">{{ job.postedAt }}</span>
                    <span class="job-type"> {{ job.contract }} </span>
                </p> 
                <h2>{{ job.position }}</h2>
                <p class="company-name">{{ job.company }}</p>
                <p class="company-location"> {{ job.location }} </p>
            </div>
        </div>
    </main>
</template>

<script>
import jobs from '../data.json'
export default {
    data (){
        return {
           showOverlay: false,
           jobs: jobs,
        }
    }
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
        height: 9rem;
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

    .tab-search {
        display: none;
    }

    .search-wrap {
        background-color: white;
        height: 4rem;
        border-radius: 5px;
        padding: 0 1rem;
        position: relative;
        top: 3rem;
        justify-content: space-between;
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
        padding: 6rem 1.5rem 4rem;
    }

    .each-job {
        margin-bottom: 3rem;
    }

    button:hover,
    .each-job:hover {
        cursor: pointer;
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
        width: 90%;
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
        margin: 1.5rem 0;
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
@media only screen and (min-width: 520px) {
     header {
        padding: 1.5rem 4rem 0;
    }

    main {
        padding: 6rem 4rem 0;
    }

     .location-job-type {
        width: 60%;
    }
}

@media only screen and (min-width: 600px) {
    header {
        padding: 1.5rem 1.5rem 0;
    }

    main {
        padding: 6rem 1.5rem 4rem;
    }

    .job-container {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 1rem;
        row-gap: 3rem;
    } 
    
     .each-job {
        margin-bottom: initial;
    }
}

@media only screen and (min-width: 720px) {
    header {
        padding: 2rem 3rem 0;
        background: url('./../assets/tablet/bg-pattern-header.svg');
    }

    main {
        padding: 8rem 3rem 4rem;
    }

     .overlay {
        display: flex !important;
        position: relative;
    }

    .overlay,
    .location-job-type {
        background-color: initial;
    }

    .location-job-type {
        position: absolute;
        top: -0.6rem;
        right: 1rem;
        width: 73%;
        justify-content: space-between;
        padding: 0;
    }

    .location-job-type,
    .checkbox-wrap {
        display: flex;
        align-items: center;
    }

     .location-job-type > div.flex {
        padding-top: unset;
    }

    .filter-search,
    .checkbox-wrap::before {
        display: none;
    }

    .tab-search {
        display: block;
        margin-right: .7rem;
    }

    .search-btn {
        background-color: #5964E0;
        width: unset;
        margin-top: unset;
        margin-left: 1rem;
        padding: 0 2.5rem;
    }
}

@media only screen and (min-width: 900px) {
    header {
        padding: 1.5rem 8rem 0;
    }

    main {
        padding: 8rem 8rem 4rem;
    }
}

@media only screen and (min-width: 1100px) {
    header {
        padding: 1.5rem 3rem 0;
    }

    main {
        padding: 8rem 3rem 4rem;
    }

    .job-container {
        grid-template-columns: auto auto auto;
    }

    .location-job-type {
        width: 60%;
    }
}

@media only screen and (min-width: 1200px) {
    header {
        padding: 1.5rem 10rem 0;
    }

    main {
        padding: 8rem 10rem 4rem;
    }

    .job-container {
        column-gap: 2rem;
    }
}

</style>