<script>
import AppHeader from './components/AppHeader.vue'

export default {
    components: {
        AppHeader,
    }
}
</script>

<template>

    <body>

        <AppHeader />


    </body>



</template>

<style lang="scss">
@use './styles/general.scss';

// .vue-home {
//     color: #2c3e50;
//     background: #181818;
//     transition: color 0.5s, background-color 0.5s;
//     line-height: 1.6;
//     font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
//         Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
//     font-size: 15px;
//     text-rendering: optimizeLegibility;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
// }

// .logo {
//     height: 6em;
//     padding: 1.5em;
//     will-change: filter;
// }

// .logo:hover {
//     filter: drop-shadow(0 0 2em #646cffaa);
// }

// .logo.vue:hover {
//     filter: drop-shadow(0 0 2em #42b883aa);
// }
</style>
