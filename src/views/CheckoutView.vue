<script>

import { state } from '../state.js'

export default {
    name: 'CheckoutView',

    data() {
        return {
            state,
            cart: []
        }
    },
    methods: {
        addDishToCart(data) {
            // console.log(this.cart);
            this.cart.push(data)

            this.state.cart_counter = this.cart.length
            localStorage.setItem("cart", JSON.stringify(this.cart))
        },
        removeDishToCart(data) {
            // console.log(this.cart);
            for (var i = 0; i < this.cart.length; i++) {

                if (this.cart[i].id === data.id) {

                    this.cart.splice(i, 1);
                    break
                }

            }
        },
    },
    mounted() {
        this.cart = JSON.parse(localStorage.getItem("cart"))
        console.log(this.cart);
    }

}
</script>

<template>
    <div class="container">
        <h1 class="mt-5 text-center">Checkout page</h1>
        <div class="row">
            <div class="col-6">
                <div class="form-wrapper">
                    <div class="mb-3">
                        <label for="" class="form-label">Name</label>
                        <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                        <small id="helpId" class="text-muted">Help text</small>
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Last Name</label>
                        <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                        <small id="helpId" class="text-muted">Help text</small>
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Address</label>
                        <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                        <small id="helpId" class="text-muted">Help text</small>
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">City</label>
                        <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                        <small id="helpId" class="text-muted">Help text</small>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="order-wrapper">
                    <div class="order" v-for="dish in cart">
                        <div class="my-card d-flex my-5">
                            <img class="img-fluid" :src="state.imagePath(dish.cover_image)" alt="">
                            <div class="details p-3 flex-grow-1">
                                <h1>{{ dish.name }}</h1>
                                <h2 class="pr-3"> {{ dish.price }} <span>&#8364;</span></h2>
                                <div class="btn-wrapper d-flex">
                                    <button type="button" @click="removeDishToCart(dish)"
                                        class="my-4 mx-3 btn btn-danger">
                                        <font-awesome-icon icon="fa-solid fa-minus" />
                                    </button>
                                    <button @click="addDishToCart(dish)" class="my-4 mx-3 btn btn-primary">
                                        <font-awesome-icon icon="fa-solid fa-plus" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {

    .form-wrapper,
    .order-wrapper {
        margin-top: 10%;
    }

    .my-card {
        padding: 1.5rem;
        box-shadow: 0 0 6px 0px rgb(192, 192, 192);
        border-radius: 5px;

        .tipology {
            color: #e29436;
        }

        img {
            width: 200px;
            border-radius: 5px;
        }
    }
}
</style>