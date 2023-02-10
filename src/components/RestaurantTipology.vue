<script>
import { state } from '../state';

export default {
    name: 'RestaurantView',
    props: {
        restaurants: Array
    },

    data() {
        return {
            state
        }
    }
}
</script>


<template>
    <div v-for="restaurant in restaurants">
        <div v-for="tipology in restaurant.tipologies">
            <!-- {{ tipology.slug }} -->
            <div v-if="tipology.slug === this.$route.name">
                <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug } }">
                    <h2>{{ restaurant.name }}</h2>
                </router-link>

                <div v-for="tipo in restaurant.tipologies">
                    {{ tipo.name }}
                </div>
            </div>
        </div>
    </div>


</template>