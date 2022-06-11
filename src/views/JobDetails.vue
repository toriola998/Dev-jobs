<template>
    <header>
        <div class="heading">
            <div class="heading-inner"> 
                <div class="flex logo-bg" :style="{backgroundColor: job.logoBackground}">
                    <img :src="require(`@/assets/${job.logo}`)" alt="company logo" />
                </div>
                <div class="flex-details">
                    <div>
                        <h1>{{ job.company }}</h1>
                        <p class="site-name">{{ job.company}}.com</p>
                    </div>
                    <a :href="job.website" class="company-site flex">Company Site</a> 
                </div> 
            </div>
        </div>
    </header>

    <main>
        <div class="details-wrap">
            <div class="job-details">
                <div class="flex-details2">
                    <div>
                        <p class="time-wrap">
                            <span class="time">{{ job.postedAt }}</span>
                            <span class="job-type"> {{ job.contract }} </span>
                        </p> 
                        <h2>{{ job.position }}</h2>
                        <p class="company-location"> {{ job.location }} </p>
                    </div>
                    <BlueButton btnAction="Apply Now" class="apply"/>
                </div>
                <p class="desc">{{ job.description }}</p>

                <h3>Requirement</h3>
                <p class="desc">{{ job.requirements.content}}</p>

                <ul class="requirement">
                    <li v-for="item in job.requirements.items" :key="item">{{ item }}</li>
                </ul>

                <h3>What You Will Do</h3>
                <p class="desc">{{ job.role.content}}</p>

                <ul class="requirement role">
                    <li v-for="item in job.role.items" :key="item">{{ item }}</li>
                </ul>
            </div>
        </div>

        <div class="footer">
            <div class="flex">
                <div class="footer-job">
                    <h2>{{ job.position }}</h2>
                    <p>{{ job.company }}</p>
                </div>
                <BlueButton btnAction="Apply Now" class="apply" />
            </div>
        </div>
    </main>
    
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

    .details-wrap {
        padding: 0 1.5rem;
    }

    .job-details {
        background-color: #fff;
        border-radius: 5px;
        padding: 2rem 1.5rem;
    }

    .apply {
        margin: 3rem 0 2rem;
    }

    h3 {
        margin: 5rem 0 2rem;
    }

    .desc,
    ul li {
        color: var(--grey);
        line-height: 1.7;
        font-size: .97rem;
    }

    ul {
        padding-left: 1rem;
    }

    .requirement {
        margin: 2rem 0;
    }

    .requirement li{
        padding-left: 1rem;
    }

    .role {
        list-style-type: decimal;
    }

    .footer {
        background-color: #fff;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        margin-top: 3rem;
        padding: 0 1.5rem;
    }

    .footer-job{
        display: none;
    }

@media only screen and (min-width: 520px) {
    .logo-bg {
        position: initial;
        border-radius: initial;
        border-bottom-left-radius: 8px;
        height: 7rem;
        width: 8rem;
    }

    .logo-bg img{
        height: 1rem;
    }

    h1,
    .site-name {
        text-align: initial;
        margin: 0.5rem 0 0 0;
    }

    .logo-bg,
    .company-site {
        margin: initial;
    }

    .heading-inner {
        padding-bottom: initial;
    }

    .heading-inner,
    .flex-details,
    .flex-details2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .flex-details {
        width: 100%;
        padding: 0 3rem;
    }

    .apply {
        padding: 0 1.5rem;
        width: initial;
        margin: initial;
    }

    .flex-details2 {
        margin-bottom: 3rem;
    }
    
    .footer > .flex{
        justify-content: space-between;
        height: 8rem;
    }

    .footer-job {
        display: block;
    }
}

@media only screen and (min-width: 700px) {
    .job-details {
        padding: 2rem 4rem;
    }

    /* .footer {
        padding: 0 4rem;
    } */
}

@media only screen and (min-width: 900px) {
    .heading,
    .details-wrap,
    .footer {
        padding: 0 10rem;
    }

    .job-details {
        padding: 2rem;
    }
}

@media only screen and (min-width: 1200px) {
    .heading-inner,
    .job-details,
    .footer > .flex {
        max-width: 45rem;
        margin: auto;
    }

    .details-wrap  {
        padding: 0 5rem;
    }
}
</style>