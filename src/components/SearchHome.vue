<script>
import { state } from '../state';

export default {
    name: 'SearchHome',
    // props: {
    //     tipologies: Array,
    //     restaurants: Array
    // },
    data() {
        return {
            state,
            total_rest: []
            // selectedTipes: [],
            // filteredRestaurants: []
        }
    },
    methods: {
        // clearTypes() {
        //     this.state.filteredRestaurants = this.state.restaurants;
        //     document.getElementById("types_select").selectedIndex = -1
        //     //ordino i ristoranti
        //     this.state.filteredRestaurants.sort


        // }
    },
    mounted() {
        this.state.filterRestaurants()
        this.total_rest = this.state.restaurants
        //azzero il carrello local storage
        // localStorage.setItem("cart", "[]")
    }


}



</script>
        
<template>
    <div class="tipologies d-flex py-3  flex-lg-row flex-column"
        :class="state.filteredRestaurants.length > 0 ? '' : ''">

        <div class="mb-4 px-5 sidebar_tips d-flex flex-column align-items-lg-start align-items-center">

            <div class="col-md-6">
                <select id="types_select" v-model="state.selectedTipes" class="dropdown" multiple>

                    <option :title="tipology.name" v-for="tipology in state.tipologies">{{
                        tipology.name
                    }}</option>

                </select>
            </div>

            <div class="d-flex align-items-center mb-3 justify-content-center">
                <h3 class="col-6 me-5">Choose one or more tipologies!</h3>
                <a href="#tipologies" class="my-btn my-3 mx-3" @click="state.filterRestaurants()">Filter</a>
            </div>
        </div>


        <div class="flex-fill ">
            <div class="container">
                <div class="row row-cols-xl-2 row-cols-1">
                    <div v-for="restaurant in state.filteredRestaurants">
                        <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug } }"
                            class="my-card d-flex">
                            <img width="200" :src="state.imagePath(restaurant.cover_image)" alt="">
                            <div class="col">
                                <div class="details p-3 d-flex flex-column justify-content-evenly">
                                    <h1>{{ restaurant.name }}</h1>
                                    <div class="d-flex">
                                        <div class="type pe-2" v-for="tipology in restaurant.tipologies">
                                            {{ tipology.name }}
                                        </div>
                                    </div>
                                    <div class="address">{{ restaurant.address }}</div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <h1 class="text-center" v-if="state.filteredRestaurants.length == 0">No restaurants found with that
                        tipologies :(</h1>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.tipologies {
    .sidebar_tips {
        height: 900px;

        @media (max-width: 991px) {
            height: 100%;
        }
    }
}

.my-card {
    padding: 0;
    margin-bottom: 1rem;
    border-radius: 5px;
    text-decoration: none;

    &:hover {
        color: black;
        box-shadow: 0 0px 1px 2px #e29436;
    }

    img {
        object-fit: cover;
        border-radius: 5px 0 0 5px;
        height: 14rem;
    }

    .details {
        background-color: rgb(239, 239, 239);
        border-radius: 0 5px 5px 0;
        height: 100%;

        .address {
            max-width: 100%;
        }
    }

    .type {
        color: #cf4835;
    }

}


select {
    width: 300px;
    padding: 8px 16px;
    height: 270px;
    overflow: auto;

    option {
        font-size: 14px;
        font-weight: 700;
        padding: 8px 8px 8px 28px;
        position: relative;
        color: #999;


        &:before {
            content: '';
            position: absolute;
            height: 18px;
            width: 18px;
            top: 0;
            bottom: 0;
            margin: auto;
            left: 0px;
            border: 1px solid #ccc;
            border-radius: 2px;
            z-index: 1;
        }

        &:checked {

            &:after {
                content: attr(title);
                background: #fff;
                color: #e29436; //main 1
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                padding: 8px 8px 8px 28px;
                border: none;
            }


            &:before {
                border-color: blue;
                background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMC42MSA4LjQ4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzNlODhmYTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFzc2V0IDg8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJfMSIgZGF0YS1uYW1lPSIxIj48cmVjdCBjbGFzcz0iY2xzLTEiIHg9Ii0wLjAzIiB5PSI1LjAxIiB3aWR0aD0iNSIgaGVpZ2h0PSIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Ljk3IDAuMDEpIHJvdGF0ZSg0NSkiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjUuMzYiIHk9Ii0wLjc2IiB3aWR0aD0iMiIgaGVpZ2h0PSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC44NiAtMy4yNikgcm90YXRlKDQ1KSIvPjwvZz48L2c+PC9zdmc+);
                background-size: 10px;
                background-repeat: no-repeat;
                background-position: center;
            }

        }

    }
}

.my-btn {
    border: 1px solid #e29436;
}
</style>