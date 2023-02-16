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
    <section class="home p-0 container mt-5" id="home">
        <div class="content pb-5">
            <div class="d-flex align-items-center pb-5 flex-md-row flex-column">
                <div class="col-md-6 col px-5">
                    <h1>Order Your Food Takeaway <span class="main-color">and many more</span></h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi eligendi alias nemo, eum fugiat
                        provident consequuntur velit laudantium fuga hic reprehenderit voluptatum placeat repellat
                        deserunt.
                    </p>
                    <div class="d-flex align-items-center justify-content-center">
                        <div class="main-color me-4 order">Order now!</div>
                        <a href="#tipologies" class="order_now main-color">
                            <font-awesome-icon icon="fa-solid fa-arrow-down" />
                        </a>
                    </div>
                </div>
                <div class="image col-md-6 col px-5">
                    <img src="../assets/img/Delivery Address.svg" alt="" />
                </div>
            </div>
        </div>


        <span id="tipologies"></span>
        <div class="pt-5">
            <div class="pt-5 mt-5">
                <SearchHome :tipologies="state.tipologies" :restaurants="state.restaurants" />

            </div>
        </div>
    </section>



    <!-- About #2 -->
    <section class="about about-2">
        <div class="content">
            <h3>
                <span class="yellow">Deliver</span> the products with best safety
            </h3>
            <p>
                Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
                porttitor consectetur pretium. Euismod imperdiet pellentesque cursus
                in netus.
            </p>

        </div>

        <div class="image">
            <img src="../assets/img/illus deliver.svg" alt="" />
        </div>
    </section>
    <!-- About #3 -->
    <section class="about about-3" style="gap: 3rem 13rem">
        <div class="image">
            <img src="../assets/img/buying online.svg" alt="" />
        </div>

        <div class="content">
            <h3><span class="yellow">Track</span> your order very easily</h3>
            <p>
                Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
                porttitor consectetur pretium. Euismod imperdiet pellentesque cursus
                in netus.
            </p>

        </div>
</section>
</template>


<style lang="scss" scoped>
@import '../styles/general.scss';

.content {
    .order_now {
        font-size: 5rem;
        position: relative;
        top: 0;
        transition: top ease 0.5s;


        &:hover {
            color: var(--main-color);
            cursor: pointer;
            top: -1rem;
        }

    }

    .order {
        font-size: 3rem;
        font-weight: 700;
    }
}

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