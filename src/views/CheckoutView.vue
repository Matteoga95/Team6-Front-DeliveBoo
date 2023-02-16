<script>

import { state } from '../state.js'

export default {
    name: 'CheckoutView',

    data() {
        return {
            state,
            name: '',
            address: '',
            phone: '',
            email: '',
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
        <h1 class="mt-5 text-center">Checkout</h1>
        <div class="row">
            <div class="col-6">
                <div class="form-wrapper">
                    <form action="">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" name="name" id="name" v-model="name" class="form-control"
                                placeholder="John Doe" aria-describedby="helpId">
                            <small id="helpId" class="text-muted">Type your name here</small>
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label">Address</label>
                            <input type="text" name="address" id="address" v-model="address" class="form-control"
                                placeholder="" aria-describedby="helpId">
                            <small id="helpId" class="text-muted">Insert your address</small>
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone number</label>
                            <input type="text" name="phone" id="phone" v-model="phone" class="form-control"
                                placeholder="0123456789" aria-describedby="helpId">
                            <small id="helpId" class="text-muted">Type your phone number</small>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" name="email" id="email" v-model="email" class="form-control"
                                placeholder="johndoe@example.it" aria-describedby="helpId">
                            <small id="helpId" class="text-muted">Type your email</small>
                        </div>
                    </form>
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
        <a class="btn btn-primary fs-3 mt-5" href="#" role="button">Proceed to ayment</a>
</div>
</template>

<style lang="scss" scoped>
.container {

    h1 {
        font-size: 40px;
    }

    .form-wrapper,
    .order-wrapper {
        margin-top: 10%;
    }

    input {
        font-size: 15px;
        width: 65%;
    }

    .order-card {
        width: 65%;
        height: 25%;
        padding: 1.5rem;
        box-shadow: 0 0 3px 0px rgb(192, 192, 192);
        border-radius: 5px;

        img {
            width: 25%;
            height: 25%;
            border-radius: 5px;
        }

    }
}
</style>