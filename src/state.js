import { reactive } from 'vue'
import axios from 'axios'


export const state = reactive({
    baseUrl: 'http://127.0.0.1:8000/',
    restaurants: [],
    tipologies: [],
    single_restaurant: [],
    selectedTipes: [],
    filteredRestaurants: [],
    loading: true,
    loadingTipologies: true,
    name: '',
    address: '',
    phone: '',
    totalCart: 0,
    success: false,
    loading: false,
    errors: {},
    cart_counter: 0,


    getRestaurants(url) {
        axios
            .get(url)
            .then(response => {
                this.loading = true
                this.restaurants = response.data.data.data;
                this.filteredRestaurants = this.restaurants;
                // console.log(response.data.data.data);
                this.loading = false
            })
            .catch(error => {
                console.error(error.message);
            })
    },
    getTipologies(url) {
        axios
            .get(url)
            .then(response => {
                this.loadingTipologies = true
                this.tipologies = response.data.data;
                // console.log(response.data.data);
                this.loadingTipologies = false
            })
            .catch(error => {
                console.error(error.message);
            })
    },
    /**
     * 
     * @param {string} url url of image calls by API (getr method)
     */
    imagePath(url) {
        if (url && !url.startsWith('https')) {
            return state.baseUrl + 'storage/' + url
        } else if (url && url.startsWith('https')) {
            return url
        } else {
            return 'https://via.placeholder.com/300x200'
        }
    },
    // pagination
    changePage(url) {
        this.getRestaurants(url)
    },
    //send email
    sendOrder() {
        state.loading = true

        const data = {
            name: state.name,
            address: state.address,
            phone: state.phone,
            totalCart: state.totalCart
        }

        axios
            .post(state.baseUrl + 'api/orders/', data)
            .then((response => {

                state.success = response.data.success

                console.log(response);

                if (state.success) {
                    state.name = '',
                        state.address = '',
                        state.phone = '',
                        state.errors = {}
                } else {
                    state.errors = response.data.errors
                }

                state.loading = false
            }))
    },
    //filtra ristoranti dinamicamente
    filterRestaurants() {
        this.filteredRestaurants = []
        // console.log(this.restaurants)
        if (this.selectedTipes.length > 0) {

            for (let l = 0; l < this.restaurants.length; l++) {
                // if (l == this.restaurants.length && this.filteredRestaurants.length == 0) {
                //     this.filteredRestaurants.push('no restaurants found')
                //     console.log(this.filteredRestaurants);
                // }
                let count = 0
                for (let i = 0; i < this.selectedTipes.length; i++) {
                    // console.log(this.selectedTipes[i])
                    // console.log(this.restaurants[l].tipologies[0].name)
                    let prova = this.restaurants[l].tipologies.find(tipi => tipi.name === this.selectedTipes[i])
                    // console.log(prova);
                    if (prova) {
                        //conta quante volte le tipologie del ristorante fanno match con tipologie selezionate
                        count++
                        // console.log(this.restaurants[l]);
                        // console.log(count);
                        if (count >= this.selectedTipes.length) {
                            if (!this.filteredRestaurants.includes(this.restaurants[l])) {
                                // console.log(count);
                                this.filteredRestaurants.push(this.restaurants[l])

                            }
                        }
                    }
                }
            }
        } else {
            this.filteredRestaurants = this.restaurants
        }
        // console.log(this.selectedTipes);
        // console.log(this.filteredRestaurants);


        //ordino i ristoranti
        this.filteredRestaurants.sort

    },
    addDishToCart(dish) {
        this.cart.push()
    }

})