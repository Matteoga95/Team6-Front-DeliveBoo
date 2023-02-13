<script>
import { state } from '../state';
import SearchHome from '../components/SearchHome.vue';

export default {
    name: 'HomeView',
    components: {
        SearchHome
    },

    data() {
        return {
            state
        }
    },

    mounted() {
        this.state.getRestaurants(this.state.baseUrl + 'api/restaurants')
        this.state.getTipologies(this.state.baseUrl + 'api/tipologies')
    }
}
</script>

<template>
    <!-- Home -->
    <section class="home" id="home">
        <div class="content">
            <div class="d-flex align-items-center">
                <div class="col-6 px-5">
                    <h1>Order Your Food Takeaway <span class="main-color">and many more</span></h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi eligendi alias nemo, eum fugiat
                        provident consequuntur velit laudantium fuga hic reprehenderit voluptatum placeat repellat
                        deserunt.
                    </p>
                </div>
                <div class="image col-6 px-5">
                    <img src="../assets/img/Delivery Address.svg" alt="" />
                </div>
            </div>
        </div>

        <SearchHome :tipologies="state.tipologies" :restaurants="state.restaurants" />

    </section>
</template>


<style lang="scss" scoped>
@import '../styles/general.scss';

.my-card {
    box-shadow: 0 0 6px 0px rgb(192, 192, 192);
    border-radius: 5px;

    &:hover .my-shadow {
        background-color: rgba(0, 0, 0, 0.563);
        cursor: pointer;
    }

    img {
        border-radius: 5px;
    }

    .my-shadow {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.432);
        top: 0;

    }
}
</style>