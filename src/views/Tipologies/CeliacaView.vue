<script>
import { state } from '../../state.js'
import RestaurantTipology from '../../components/RestaurantTipology.vue'
import SearchHome from '../../components/SearchHome.vue';


export default {
    name: "CeliacaView",
    components: { RestaurantTipology, SearchHome },
    data() {
        return {
            state
        }
    },
    mounted() {
        this.state.getRestaurants(this.state.baseUrl + "api/restaurants");
    }
}
</script>

<template>
    <SearchHome :tipologies="state.tipologies" />

    <RestaurantTipology :restaurants="state.restaurants" />
</template>