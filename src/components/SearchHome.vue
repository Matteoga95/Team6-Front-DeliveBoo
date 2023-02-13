<script>

export default {
    name: 'SearchHome',
    props: {
        tipologies: Array,
        restaurants: Array
    },
    data() {
        return {
            selectedTipes: [],
            filteredRestaurants: []
        }
    },
    methods: {
        filterRestaurants() {
            this.filteredRestaurants = []
            // console.log(this.restaurants)
            if (this.selectedTipes.length > 0) {

                for (let i = 0; i < this.selectedTipes.length; i++) {
                    // console.log(this.selectedTipes[i])
                    for (let l = 0; l < this.restaurants.length; l++) {
                        // console.log(this.restaurants[l].tipologies[0].name)
                        let prova = this.restaurants[l].tipologies.find(tipi => tipi.name === this.selectedTipes[i])
                        // console.log(prova);
                        if (prova) {
                            if (!this.filteredRestaurants.includes(this.restaurants[l])) {
                                this.filteredRestaurants.push(this.restaurants[l])
                            }
                        }
                    }
                }
            } else {
                this.filteredRestaurants = this.restaurants
            }
            console.log(this.selectedTipes);
            console.log(this.filteredRestaurants);

        }
    },
    mounted() {
        // console.log(this.selectedTipes)
    }

}
</script>
        
<template>
    <div class="tipologies d-flex py-3 justify-content-center">

        <!-- <div> -->
        <!-- <label class="typo__label">Simple select / dropdown</label>
            <multiselect v-model="selectedTipes" :options="tipologies" :multiple="true" :close-on-select="false"
                :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name"
                :preselect-first="true">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single"
                        v-if="selectedTipes.length" v-show="!isOpen">{{ selectedTipes.length }} options
                        selected</span></template>
            </multiselect>
            <pre class="language-json"><code>{{ selectedTipes }}</code></pre>
        </div> -->

        <div class="mb-4 row ">
            <div class="col-md-4 col-form-label">
                <label for="tipologies" class=" text-md-right">Filter the tipology</label>
                <button class="my-btn my-3" @click="filterRestaurants()">Search</button>

            </div>
            <div class="col-md-6">
                <select v-model="selectedTipes" class="dropdown" multiple>
                    <option :title="tipology.name" v-for="tipology in tipologies">{{
                        tipology.name
                    }}</option>

                </select>
            </div>
        </div>


        <div class="">
            <div v-for="restaurant in filteredRestaurants">
                <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug } }" class="my-card d-flex">
                    <img width="200"
                        src=http://127.0.0.1:8000/storage/uploads/6VmtRVOEmkD4eQ0TataHsGOOpwM3U2T8POoxbZbV.jpg alt="">
                    <div class="col">
                        <div class="details p-3">
                            <h1>{{ restaurant.name }}</h1>
                            <span class="type" v-for="tipology in restaurant.tipologies">
                                {{ tipology.name + ' ' }}
                            </span>
                            <div>{{ restaurant.address }}</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>


    <!-- <div class="col" v-for="tipology in tipologies">
            <div class="my-card mx-2 text-center position-relative">

                <img src="https://www.giallozafferano.it/images/233-23307/Pane-di-semola_780x520_wm.jpg" alt="">
                <div class="position-absolute my-shadow">

                </div>

                <div class="text-tipology position-absolute top-50 start-50 translate-middle text-white">
                    {{ tipology.name }}
                </div>
            </div>
        </div> -->
</template>

<style lang="scss" scoped>
.my-card {
    padding: 0;
    margin-bottom: 1rem;
    border-radius: 5px;

    img {
        object-fit: cover;
        border-radius: 5px 0 0 5px;
        height: 100%;
    }

    .details {
        background-color: gainsboro;
        border-radius: 0 5px 5px 0;
        height: 100%;
    }

    .type {
        color: #cf4835;
    }
}


select {
    padding: 8px 16px;
    height: 270px;
    overflow: auto;

    option {
        font-size: 14px;
        font-weight: 700;
        padding: 8px 8px 8px 28px;
        position: relative;
        color: #999;


        &:before {
            content: '';
            position: absolute;
            height: 18px;
            width: 18px;
            top: 0;
            bottom: 0;
            margin: auto;
            left: 0px;
            border: 1px solid #ccc;
            border-radius: 2px;
            z-index: 1;
        }

        &:checked {

            &:after {
                content: attr(title);
                background: #fff;
                color: #e29436; //main 1
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                padding: 8px 8px 8px 28px;
                border: none;
            }


            &:before {
                border-color: blue;
                background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMC42MSA4LjQ4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzNlODhmYTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFzc2V0IDg8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJfMSIgZGF0YS1uYW1lPSIxIj48cmVjdCBjbGFzcz0iY2xzLTEiIHg9Ii0wLjAzIiB5PSI1LjAxIiB3aWR0aD0iNSIgaGVpZ2h0PSIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Ljk3IDAuMDEpIHJvdGF0ZSg0NSkiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjUuMzYiIHk9Ii0wLjc2IiB3aWR0aD0iMiIgaGVpZ2h0PSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC44NiAtMy4yNikgcm90YXRlKDQ1KSIvPjwvZz48L2c+PC9zdmc+);
                background-size: 10px;
                background-repeat: no-repeat;
                background-position: center;
            }

        }

    }
}

.my-btn {
    border: 1px solid #e29436;
}
</style>