<script>
import { state } from '../state.js'

export default {
    name: 'CineseView',
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
    <h3>
        {{ this.state.restaurants[0].tipologies }}
    </h3>

    <div v-for="restaurant in this.state.restaurants">
        <div v-for="tipology in restaurant.tipologies">
            <!-- {{ tipology.slug }} -->
            <div v-if="tipology.slug === 'streetfood'">
                {{ restaurant.name }}

                <div v-for="tipo in restaurant.tipologies">
                    {{ tipo.name }}
                </div>
            </div>
        </div>
    </div>
</template>