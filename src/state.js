import { reactive } from 'vue'
import axios from 'axios'


export const state = reactive({
    baseUrl: 'http://127.0.0.1:8001/',
    restaurants: [],
    tipologies: [],
    single_restaurant: [],
    selectedTipes: [],
    filteredRestaurants: [],
    loading: true,
    loadingTipologies: true,
    name: '',
    email: '',
    message: '',
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
                console.log(response.data.data.data);
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
    sendForm() {
        state.loading = true

        const data = {
            name: state.name,
            email: state.email,
            message: state.message
        }

        axios
            .post(state.baseUrl + 'api/contacts/', data)
            .then((response => {

                state.success = response.data.success

                console.log(response);

                if (state.success) {
                    state.name = '',
                        state.email = '',
                        state.message = '',
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
        // console.log(this.selectedTipes);
        // console.log(this.filteredRestaurants);


        //ordino i ristoranti
        this.filteredRestaurants.sort

    },
    addDishToCart(dish) {
        this.cart.push()
    }

})