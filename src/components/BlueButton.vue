<template>
    <button class="search-btn flex"> {{ btnAction }} </button>
</template>

<script>
export default {
    props: ['btnAction']
}
</script>

<style scoped>
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