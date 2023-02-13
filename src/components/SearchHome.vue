<script>

export default {
    name: 'SearchHome',
    props: {
        tipologies: Array,
        restaurants: Array
    },
    data() {
        return {
            SelectedTipes: [],
            FilteredRestaurants: []
        }
    },
    methods: {
        filterRestaurants() {
            this.FilteredRestaurants = []
            // console.log(this.restaurants)
            if (this.SelectedTipes.length > 0) {

                for (let i = 0; i < this.SelectedTipes.length; i++) {
                    // console.log(this.SelectedTipes[i])
                    for (let l = 0; l < this.restaurants.length; l++) {
                        // console.log(this.restaurants[l].tipologies[0].name)
                        let prova = this.restaurants[l].tipologies.find(tipi => tipi.name === this.SelectedTipes[i])
                        // console.log(prova);
                        if (prova) {
                            if (!this.FilteredRestaurants.includes(this.restaurants[l])) {
                                this.FilteredRestaurants.push(this.restaurants[l])
                            }
                        }

                    }

                }
            } else {
                this.FilteredRestaurants = this.restaurants
            }
            console.log(this.FilteredRestaurants);
        }
    },
    mounted() {
        console.log(this.SelectedTipes)
    }

}
</script>
        
<template>
    <div class="tipologies d-flex py-3">

        <!-- <div> -->
        <!-- <label class="typo__label">Simple select / dropdown</label>
            <multiselect v-model="SelectedTipes" :options="tipologies" :multiple="true" :close-on-select="false"
                :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name"
                :preselect-first="true">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single"
                        v-if="SelectedTipes.length" v-show="!isOpen">{{ SelectedTipes.length }} options
                        selected</span></template>
            </multiselect>
            <pre class="language-json"><code>{{ SelectedTipes }}</code></pre>
        </div> -->

        <div class="mb-4 row">
            <label for="tipologies" class="col-md-4 col-form-label text-md-right">Filter the tipology</label>
            <div class="col-md-6">
                <select v-model="SelectedTipes" class="dropdown" multiple>
                    <option v-for="tipology in tipologies">{{ tipology.name }}</option>

                </select>
            </div>
            <button @click="filterRestaurants()">Search</button>

        </div>


        <div class="col" v-for="tipology in tipologies">
            <div class="my-card mx-2 text-center position-relative">

                <img src="https://www.giallozafferano.it/images/233-23307/Pane-di-semola_780x520_wm.jpg" alt="">
                <div class="position-absolute my-shadow">

                </div>

                <div class="text-tipology position-absolute top-50 start-50 translate-middle text-white">
                    {{ tipology.name }}
                </div>
            </div>
        </div>






    </div>
</template>

<style lang="scss" scoped>

</style>