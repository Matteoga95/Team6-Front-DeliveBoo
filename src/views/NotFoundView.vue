<script>
export default {
    name: 'NotFounfView'
}
</script>

<template>
    <div class="container">
        <h1 class="lead">
            😨 Ops, Page not found!
        </h1>
        <router-link :to="{ name: 'home' }">Go to Homepage</router-link>

    </div>
</template>


<style lang="scss" scoped>
@import '../styles/general.scss';
</style>