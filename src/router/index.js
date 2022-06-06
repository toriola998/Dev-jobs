import {createRouter, createWebHistory} from 'vue-router'

import Home from './../views/Home.vue'
import JobDetails from './../views/JobDetails.vue'

const router = createRouter({
    history:  createWebHistory(),
    scrollBehavior() {
      // always scroll to top
      return { 
          top: 0,
          behavior: 'smooth', 
     }
   },
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/job-details/:job',
            name: 'JobDetails',
            component: JobDetails
        },
    ]
})
export default router;

