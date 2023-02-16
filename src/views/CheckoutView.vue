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
                    <div class="row">
                        <div class="col-3">
                            <form action="">
                                <div class="mb-3">
                                    <label for="" class="form-label">Name</label>
                                    <input type="text" name="" id="" class="form-control" placeholder=""
                                        aria-describedby="helpId">
                                    <small id="helpId" class="text-muted">Help text</small>
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">Last Name</label>
                                    <input type="text" name="" id="" class="form-control" placeholder=""
                                        aria-describedby="helpId">
                                    <small id="helpId" class="text-muted">Help text</small>
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">Address</label>
                                    <input type="text" name="" id="" class="form-control" placeholder=""
                                        aria-describedby="helpId">
                                    <small id="helpId" class="text-muted">Help text</small>
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">City</label>
                                    <input type="text" name="" id="" class="form-control" placeholder=""
                                        aria-describedby="helpId">
                                    <small id="helpId" class="text-muted">Help text</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="order-wrapper">
                    <div class="order" v-for="dish in cart">
                        <div class="order-card d-flex my-5">
                            <img class="img-fluid" :src="state.imagePath(dish.cover_image)" alt="">
                            <div class="details p-3 flex-grow-1">
                                <h3>{{ dish.name }}</h3>
                                <h5 class="pr-3"> {{ dish.price }} <span>&#8364;</span></h5>
                            </div>
                            <div class="btn-wrapper d-flex align-items-center">
                                <button type="button" @click="removeDishToCart(dish)" class="my-4 mx-3 btn btn-danger">
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
        <a class="btn btn-primary fs-3 mt-5" href="#" role="button">Payment</a>
</div>
</template>

<style lang="scss" scoped>
.container {

    .form-wrapper,
    .order-wrapper {
        margin-top: 10%;
    }

    .order-card {
        width: 65%;
        height: 25%;
        border: 1px solid;

        img {
            width: 25%;
            height: 25%;
            border-radius: 5px;
        }

    }
}</style>