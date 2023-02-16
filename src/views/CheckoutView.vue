<script>

import { state } from '../state.js'

export default {
    name: 'CheckoutView',

    data() {
        return {
            state
        }
    },
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
                    <div class="order" v-for="dish in state.cart">
                        <div class="my-card  my-5">
                            <div class="d-flex justify-content-center">
                                <img class="img-fluid" :src="state.imagePath(dish.cover_image)" alt="">
                                <div class="details p-3 flex-grow-1">
                                    <h1>{{ dish.name }} <span>X {{ dish.qty }} </span></h1>
                                    <h2 class="pr-3"> {{ dish.price }} <span>&#8364;</span></h2>

                                    <div class="btn-wrapper d-flex">
                                        <button type="button" @click="state.removeDishToCart(dish)"
                                            class="my-4 mx-3 btn btn-danger">
                                            <font-awesome-icon icon="fa-solid fa-minus" />
                                        </button>
                                        <button @click="state.addDishToCart(dish)" class="my-4 mx-3 btn btn-primary">
                                            <font-awesome-icon icon="fa-solid fa-plus" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2>Total cart:</h2>
                                <h2 class="pr-3"> {{ state.totalCart }} <span>&#8364;</span></h2>
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