<template>
    <header>
        <div class="heading">
            <div class="heading-inner"> 
                <div class="flex logo-bg" :style="{backgroundColor: job.logoBackground}">
                <img :src="require(`@/assets/${job.logo}`)" alt="company logo" />
            </div>
            <h1>{{ job.company }}</h1>
            <p>{{ job.company}}.name</p>
            <a :href="job.website" class="company-site">Company Site</a>
            </div>
            
        </div>
    </header>
    
</template>

<script>
import jobs from '../data.json'
export default {
    name: 'JobDetails',
    data() {
        return {
            jobs: jobs
        }
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

    }
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
    }

    .logo-bg{
        margin: auto;
    }

    .company-site {
        display: block;
    }

    h1, p, .company-site {
        text-align: center;
    }
</style>