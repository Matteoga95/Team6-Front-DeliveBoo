<script>
export default {
    name: 'TipologiesHome',
    props: {
        tipologies: Array
    }

}
</script>
        
<template>
    <div class="tipologies d-flex py-3">

        <router-link :to="{ name: tipology.slug }" class="col" v-for="tipology in tipologies">
            <div class="my-card mx-2 text-center position-relative">

                <img src="https://www.giallozafferano.it/images/233-23307/Pane-di-semola_780x520_wm.jpg" alt="">
                <div class="position-absolute my-shadow">

                </div>

                <div class="text-tipology position-absolute top-50 start-50 translate-middle text-white">
                    {{ tipology.name }}
                </div>
            </div>
        </router-link>

    </div>
</template>

<style lang="scss" scoped>

</style>