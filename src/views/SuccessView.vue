<script>
import { state } from '../state'

export default {
    name: 'SuccessView',
    data() {
        return {
            state
        }
    },
    mounted() {
        state.emptyCart()
    }
}
</script>

<template>
    <div class="container my-5 text-center fw-b fs-1">
        <div class="alert alert-success p-5">
            <h1>Order success!</h1>
            <p>Thank you! Your order will be delivered as soon as possible</p>
        </div>
        <!-- <div class="order-checked text-center">
                                                                                                        <img src="../assets/img/driver-clock.png" alt="">
                                                                                                    </div> -->
        <div class="my-card">
            <div class="card-desc">
                <h2>Still Hungry?</h2>
                <p>Let's order again!</p>
            </div>
            <div class="card-image">
                <img src="../assets/img/buying online.svg" alt="">
            </div>
            <div class="card-btn mt-4">
                <button @click="state.router.push({ name: 'home' })" class="my-btn">Go back to home</button>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@import '../styles/general.scss';

h2 {
    font-size: 40px;
}

.card-image {
    img {
        width: 20%;
    }
}

.my-btn {
    border: 1px solid transparent;

    &:hover {
        color: var(--main-color);
        border-color: var(--main-color);
    }
}
</style>