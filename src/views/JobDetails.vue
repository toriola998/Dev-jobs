<template>
    <h2> {{ job.company }}</h2>
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

<style>

</style>