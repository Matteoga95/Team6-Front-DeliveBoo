<script>
import { state } from '../state';

export default {
    name: 'AppHeader',
    data() {
        return {
            state
        }
    },
}


</script>

<template>
    <header class="header">
        <div class="logo">
            <img src="../assets/img/logo-deliveboo.png" alt="">
        </div>
        <nav class="navbar">
            <a href="http://localhost:5173">Home</a>
            <!-- <a href="#">Restaurants</a> -->
            <a href="http://127.0.0.1:8001/login" class="my-btn">Login</a>
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            <span class='badge badge-warning' id='lblCartCount'>{{ state.cart_counter }}</span>
        </nav>


        <!-- Hamburger -->
        <!-- <div class="hamburger">
            <img src="../assets/img/grid-outline.svg" alt="" />
        </div> -->
        <div class="dropdown hamburger">
            <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../assets/img/grid-outline.svg" alt="" />
                <span class='badge badge-warning' id='lblCartCount'>{{ state.cart_counter }}</span>
            </div>
            <ul class="dropdown-menu p-4">
                <li> <a href="http://localhost:5173">Home</a>
                </li>
                <li><a href="http://127.0.0.1:8001/login" class="my-btn">Login</a></li>
                <li class="mt-4"><font-awesome-icon icon="fa-solid fa-cart-shopping" />
                    <span class='badge badge-warning' id='lblCartCount'>{{ state.cart_counter }}</span>
                </li>
            </ul>
        </div>
    </header>
</template>


<style lang="scss" scoped>
.dropdown-menu li {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.badge {
    padding-left: 9px;
    padding-right: 9px;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
    font-size: large;
}

.label-warning[href],
.badge-warning[href] {
    background-color: #c67605;
}

#lblCartCount {
    font-size: 12px;
    background: #cf4835;
    color: #fff;
    padding: 0px 5px;
    vertical-align: top;
    margin-left: -5px;
    margin-top: -10px;
}

.logo img {
    width: 50%;
}
</style>