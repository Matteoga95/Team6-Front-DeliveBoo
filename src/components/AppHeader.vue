<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header class="header">
        <div class="logo">
            <img src="../assets/img/logo-deliveboo.png" alt="">
        </div>
        <nav class="navbar">
            <router-link :to="{ name: 'home' }" href="#home">Home</router-link>
            <a href="http://127.0.0.1:8000/login" class="my-btn">Login</a>
        </nav>


        <!-- Hamburger -->
        <div class="hamburger">
            <img src="../assets/img/grid-outline.svg" alt="" />
        </div>
    </header>
</template>


<style lang="scss" scoped>
.logo img {
    width: 50%;
}
</style>