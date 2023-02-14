<script>
import { state } from '../state';
import axios from 'axios'

export default {
    name: 'RestaurantView',
    props: ['slug'],
    data() {
        return {
            state,
            loading: true,
            restaurant: [],
            has_dishes: true,
            //oggetti del carrello
            cart_dishes: JSON.parse(localStorage.getItem("dishes")),
            cart: JSON.parse(localStorage.getItem("cart")),

        }
    },
    methods: {
        addDishToCart(data) {
            // console.log(this.cart);
            this.cart.push(data)
            this.state.cart_counter = this.cart.length
            localStorage.setItem("cart", JSON.stringify(this.cart))
        },
        getSingleRestaurant(url) {
            console.log(url);
            axios
                .get(url)
                .then(response => {


                    this.loading = true
                    this.restaurant = response.data.data;
                    this.getHasDishes()
                    console.log(this.restaurant);
                    this.loading = false
                })
                .catch(error => {
                    console.error(error.message);
                })
                .finally(function () {

                })
        },
        getHasDishes() {

            //determino se ha piatti o meno
            if (!this.restaurant) {
                this.has_dishes = false
            }
            if (!this.restaurant.dishes) {
                this.has_dishes = false
            } else {
                if (!this.restaurant.dishes.length) {
                    this.has_dishes = false
                }
            }

            //inizializzo il carrello nel local storage
            if (this.has_dishes) {

                localStorage.setItem('dishes', JSON.stringify(this.restaurant.dishes))
                if (!localStorage.getItem("cart")) {
                    localStorage.setItem("cart", "[]")
                    this.state.cart_counter = this.cart.length
                }
            }
        }

    },
    mounted() {

        this.getSingleRestaurant(this.state.baseUrl + 'api/restaurants/' + this.slug)


    }
}
</script>

<template>
    <section class="">
        <a @click="$router.go(-1)">back</a>
        <div class="container ">
            <!-- banner con la foto del ristorante -->.
            <div class="d-flex justify-content-center">
                <img class="mb-4 cover" src="https://www.travel365.it/foto/altitude-at-shangri-la.jpg" alt="">
            </div>


            <!-- info del ristorante -->
            <div class="d-flex justify-content-center text-center">

                <div class="">
                    <h1 class="mb-4">{{ this.restaurant.name }}</h1>
                    <div class="d-flex justify-content-center" v-for="types in this.restaurant.tipologies">
                        <p class="type">{{ types.name }} </p>
                    </div>
                    <div class="">
                        <div class="d-flex">
                            <font-awesome-icon icon="fa-solid fa-location-dot" />
                            <h2 class="px-3">{{ this.restaurant.address }}</h2>

                        </div>
                        <div class="d-flex">
                            <font-awesome-icon icon="fa-solid fa-phone" />
                            <h2 class="px-3"> {{ this.restaurant.phone_number }}</h2>
                        </div>


                    </div>

                </div>




            </div>

            <!-- piatti -->
            <div v-if="this.has_dishes">
                <div v-for="dish in this.restaurant.dishes">
                    <div class="my-card d-flex my-5">
                        <img width="200" :src="state.imagePath(dish.cover_image)" alt="">
                        <div class="details p-3 flex-grow-1">
                            <h1>{{ dish.name }}</h1>
                            <p>{{ dish.description }}</p>
                            <h2 class="pr-3"> {{ dish.price }} <span>&#8364;</span></h2>
                        </div>
                        <div class="align-self-center text-end">
                            <p>Aggiungi al carrello</p>
                            <button @click="addDishToCart(dish)" class="btn py-2 px-3 mx-4 btn-primary ">
                                <font-awesome-icon icon="fa-solid fa-plus" />
                            </button>
                        </div>

                    </div>

                </div>
            </div>
            <h2 class=" py-5 text-center" v-else>There are no dishes for this restaurant yet</h2>


        </div>
    </section>
</template>


<style lang="scss" scoped>
@import '../styles/general.scss';

:root {

    --main-color: #e29436;
    --main-color-dark: #cf4835;

}

.cover {
    max-height: 300px;
    width: 100%;
}

.btn-primary {
    background-color: var(--main-color);
    border: var(--main-color-dark);
    color: #07051a;
    transition: 0.5s;

    &:hover {
        background-color: var(--main-color-dark);
        ;
    }

    font-size: large;
}

.type {
    padding: 5px;
}

.my-card {
    padding: 1.5rem;
    box-shadow: 0 0 6px 0px rgb(192, 192, 192);
    border-radius: 5px;

    .tipology {
        color: #e29436;
    }

    img {
        border-radius: 5px;

    }

    .my-btn {
        border-radius: 30px;
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
</style>