<template>
    <header>
        <HeaderBackground />
        <form @submit.prevent="">
            <div class="search-wrap flex">
                <div class="flex">
                    <img src="./../assets/desktop/icon-search.svg" 
                         alt=""
                         width="20" height="20" 
                         class="tab-search"/>
                    <label for="job-title" hidden>Job title</label>
                    <input placeholder="Filter by title..." 
                           type="text" 
                           id="job-title"
                           v-model="jobTitle" />
                </div>
                <div class="flex filter-search">
                    <button @click="showOverlay = !showOverlay">
                        <img src="./../assets/mobile/icon-filter.svg" 
                            alt="click to filter by location and fulltime" 
                            width="20" height="20"/>
                    </button>
                    <button class="blue-search flex">
                        <img src="./../assets/mobile/icon-search.svg" 
                             alt="search by title"/>
                    </button>
                </div>
            </div>
            
            <div class="overlay flex" v-show="showOverlay" @click.self="showOverlay = !showOverlay">
                <div class="location-job-type"> 
                    <div class="flex">
                        <img src="./../assets/desktop/icon-location.svg" alt="" />
                        <label for="location" hidden> Location</label>
                        <input placeholder="Filter by location..." 
                               type="text" 
                               id="location"
                               v-model="jobLocation" />
                    </div>

                    <div class="checkbox-wrap">
                        <input type="checkbox" 
                                id="full-time"
                                name="full-time"
                                @change="isChecked"
                                v-model="isFullTime" />
                        <label for="full-time" class="checkbox"> Full time only</label>
                    </div>
                    <button class="search-btn flex"> Search </button>
                </div>
            </div>
        </form>
    </header>

    <main>
        <div class="job-container">
            <router-link class="each-job" 
                 v-for="job in renderedJobs" :key="job.id" 
                 :to="{name: 'JobDetails', params: { jobPosition: job.position },}">
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
            </router-link>
        </div>
    </main>
</template>

<script>
import jobs from '../data.json'
import HeaderBackground from './../components/HeaderBackground.vue'
export default {
    data (){
        return {
           showOverlay: false,
           jobs: jobs,
           jobTitle: "",
           jobLocation: "",
           isFullTime: null,
        }
    },

    components: {
        HeaderBackground
    },

    methods: {
        isChecked(e) {
            if (e.target.checked) {
                console.log('checked')
            } else {
                console.log('unchecked')
            }
        },

        // searchJob() {
        //     this.jobs = this.jobs.filter( (job) => {
        //          job.position.toLowerCase().includes(this.jobTitle.toLowerCase())
        //                 && job.location.toLowerCase().includes(this.jobLocation.toLowerCase()) 
        //     })
        // }
    },

    computed: {
        renderedJobs() {
            return  this.jobs.filter((job) => { 
                return (job.position.toLowerCase().includes(this.jobTitle.toLowerCase())
                        && job.location.toLowerCase().includes(this.jobLocation.toLowerCase())
                        && (this.isFullTime = true || job.contract === "Full Time"));
            })
        }
    },

    mounted() {
        console.log(this.isFullTime)
    }
        
}
</script>

<style scoped>
    .tab-search {
        display: none;
    }

    form {
        padding: 0 1.5rem;
    }

    .search-wrap {
        background-color: white;
        height: 4rem;
        border-radius: 5px;
        padding: 0 1rem;
        position: relative;
        top: -2rem;
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
        padding: 4rem 1.5rem 4rem;
    }

    .each-job {
        margin-bottom: 3rem;
        display: inline-block;
        width: 100%;
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

    .company-location {
        margin-top: 2rem;
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
    form {
        padding: 0 4rem ;
    } 

    main {
        padding: 6rem 4rem 0;
    }

     .location-job-type {
        width: 60%;
    }
}

@media only screen and (min-width: 600px) {
   form {
        padding: 0 1.5rem ;
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
    form {
        padding: 0 3rem ;
    } 

    main {
        padding: 4rem 3rem;
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
        bottom: 2.5rem;
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
    main {
        padding: 4rem 8rem;
    }

    .location-job-type {
        width: 65%;
    }
}

@media only screen and (min-width: 1100px) {
    main {
        padding: 4rem 3rem;
    }

    .job-container {
        grid-template-columns: auto auto auto;
    }
}

@media only screen and (min-width: 1200px) {
    form {
        padding: 0 10rem;
    }

    main {
        padding: 4rem 10rem;
    }

    .job-container {
        column-gap: 2rem;
    }
}

</style>