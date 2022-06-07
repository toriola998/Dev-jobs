<template>
    <header>
        <div class="heading">
            <div class="heading-inner"> 
                <div class="flex logo-bg" :style="{backgroundColor: job.logoBackground}">
                    <img :src="require(`@/assets/${job.logo}`)" alt="company logo" />
                </div>
                <h1>{{ job.company }}</h1>
                <p class="site-name">{{ job.company}}.com</p>
                <a :href="job.website" class="company-site flex">Company Site</a>  
            </div>
        </div>

        <div>
            <p class="time-wrap">
                <span class="time">{{ job.postedAt }}</span>
                <span class="job-type"> {{ job.contract }} </span>
            </p> 
            <h2>{{ job.position }}</h2>
            <p class="company-location"> {{ job.location }} </p>
            <BlueButton btnAction="Apply Now"/>
        </div>
    </header>
    
</template>

<script>
import jobs from '../data.json'
import BlueButton from './../components/BlueButton.vue'
export default {
    name: 'JobDetails',
    data() {
        return {
            jobs: jobs
        }
    },

    components: {
        BlueButton
    },  

    computed: {
        jobPosition(){
             return this.$route.params.jobPosition
        },

        job() {
            return this.jobs.find( (item) => {
                   // return item.id === parseInt(this.productId)
                   return item.position == this.jobPosition
            })
        },

    },

    watch: {
        '$route' () {
            this.job
        }
    },
}
</script>

<style scoped>
    .heading {
        margin: 4rem 0 2rem;
        padding: 0 1.5rem;
    }

    .heading-inner {
        background-color: #fff;
        border-radius: 5px;
        padding-bottom: 2rem ;
    }

    .logo-bg{
        margin: auto;
    }

    h1,
    .site-name,
    .company-site {
        text-align: center;
    }

    h1 {
        font-size: 1.3rem;
    }

    .site-name {
        text-transform: lowercase;
        color: var(--grey);
        margin: .5rem 0 1.5rem;
    }

    .company-site {
        justify-content: center;
        background-color: var(--lightBlue);
        margin: auto;
        width: 9rem;
        color: var(--blue);
        font-weight: 700;
        font-size: .9rem;
        border-radius: 5px;
        height: 2.5rem;
    }
</style>