<script>
import { state } from '../../state.js'
import RestaurantTipology from '../../components/RestaurantTipology.vue'
import TipologiesHome from '../../components/TipologiesHome.vue';


export default {
    name: 'MessicanaView',
    components: { RestaurantTipology, TipologiesHome },

    data() {
        return {
            state
        }
    },
    mounted() {
        this.state.getRestaurants(this.state.baseUrl + 'api/restaurants')

    }
}
</script>

<template>
    <TipologiesHome :tipologies="state.tipologies" />

    <RestaurantTipology :restaurants="state.restaurants" />

</template>