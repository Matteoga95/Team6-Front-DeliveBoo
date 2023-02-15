<script>
import { state } from '../state';
import axios from 'axios'

var modal = document.getElementById("myModal");
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

export default {
    name: 'RestaurantView',
    props: ['slug'],
    data() {
        return {
            state,
            loading: true,
            restaurant: [],
            has_dishes: true,
            new_dish_cart: [],
            //oggetti del carrello
            cart_dishes: JSON.parse(localStorage.getItem("dishes")),
            cart: JSON.parse(localStorage.getItem("cart")),

        }
    },
    methods: {
        addDishToCart(data) {
            //valorizzo il piatto nel return che si vuole aggiungere
            this.new_dish_cart = data

            //se nel carrello c'è qualcosa ed è di un ristorante non quest faccio il controllo con la modale
            console.log(this.cart.length);
            if (this.cart.length > 0) {
                if (this.cart[0].restaurant_id != data.restaurant_id) {
                    //apro la modale
                    var modal = document.getElementById("myModal");
                    modal.style.display = "block";
                } else {
                    // console.log(this.cart);
                    this.cart.push(data)

                    this.state.cart_counter = this.cart.length
                    localStorage.setItem("cart", JSON.stringify(this.cart))

                }

            } else {
                console.log(this.cart);
                this.cart.push(data)

                this.state.cart_counter = this.cart.length
                localStorage.setItem("cart", JSON.stringify(this.cart))

            }
        },
        removeDishToCart(data) {
            // console.log(this.cart);
            for (var i = 0; i < this.cart.length; i++) {

                if (this.cart[i].id === data.id) {

                    this.cart.splice(i, 1);
                    break
                }

            }

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
                    this.state.single_restaurant = this.restaurant
                })
                .catch(error => {
                    console.error(error.message);
                })
                .finally(function () {

                })
        },
        cancelModal() {
            //in questo caso tolgo la modale e non ci metto il piatto che si voleva aggiungere

            this.new_dish_cart = []
            this.state.cart_counter = this.cart.length
            var modal = document.getElementById("myModal");
            modal.style.display = "none";


        },
        acceptModal() {
            //in questo caso tolgo la modale e cancello il carrello e ci metto il piatto che si voleva aggiungere

            this.cart = []
            this.cart.push(this.new_dish_cart)

            this.state.cart_counter = this.cart.length
            localStorage.setItem("cart", JSON.stringify(this.cart))


            var modal = document.getElementById("myModal");
            modal.style.display = "none";


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
        },
        getBack() {

            this.$router.go(-1)
        }

    },

    mounted() {

        this.getSingleRestaurant(this.state.baseUrl + 'api/restaurants/' + this.slug)


    }
}
</script>

<template>
    <section class="">
        <a @click="getBack()">back</a>
        <div class="container ">

            <!-- The Modal -->
            <div id="myModal" class="modal">

                <!-- Modal content -->
                <div class="modal-content text-center">

                    <h3>You can only order from one restaurant</h3>
                    <p>ok to continue or cancel to go back</p>
                    <div class="d-flex justify-content-center">
                        <button class=" m-3 btn btn-primary " @click="acceptModal()">Ok</button>
                        <button type="button" class=" m-3 btn btn-danger" @click="cancelModal()">Cancel</button>
                    </div>

                </div>

            </div>


            <!-- banner con la foto del ristorante -->
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

            <!-- piatti e cart-->
            <div class="d-flex justify-content-between">

                <!-- piatti -->
                <div class="col-10" v-if="this.has_dishes">
                    <div v-for="dish in this.restaurant.dishes">
                        <div class="my-card d-flex my-5">
                            <img width="200" :src="state.imagePath(dish.cover_image)" alt="">
                            <div class="details p-3 flex-grow-1">
                                <h1>{{ dish.name }}</h1>
                                <p>{{ dish.description }}</p>
                                <h2 class="pr-3"> {{ dish.price }} <span>&#8364;</span></h2>
                            </div>
                            <div class="align-self-center text-end">
                                <button @click="addDishToCart(dish)"
                                    class="btn py-2 px-3 mx-4 btn-primary d-flex align-items-center">
                                    Add to cart
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
                <h2 class=" py-5 text-center" v-else>There are no dishes for this restaurant yet</h2>

                <!-- cart -->
                <div class="mx-5 px-5 col-4">
                    <h2 class="text-center mx-5">Cart</h2>
                    <router-link class="btn btn-primary" :to="{ name: 'checkout' }" role="button">Checkout</router-link>
                    <div class="d-flex justify-content-start" v-for="dish in this.cart">
                        <h2 class="my-4">{{ dish.name }}</h2>
                        <button type="button" @click="removeDishToCart(dish)" class=" my-4 mx-3 btn btn-danger">
                            <font-awesome-icon icon="fa-solid fa-minus" />
                        </button>

                    </div>
                </div>

            </div>

        </div>
    </section>
</template>


<style lang="scss" scoped>
@import '../styles/general.scss';

:root {

    --main-color: #e29436;
    --main-color-dark: #cf4835;

}

.modal {
    display: none;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    padding-top: 100px;
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
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

.btn-danger {

    transition: 0.5s;
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