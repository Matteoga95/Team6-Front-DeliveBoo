import { reactive } from 'vue'
import axios from 'axios'


export const state = reactive({
    baseUrl: 'http://127.0.0.1:8000/',
    restaurants: [],
    router: Object,
    tipologies: [],
    single_restaurant: [],
    selectedTipes: [],
    filteredRestaurants: [],
    loading: true,
    loadingTipologies: true,
    name: '',
    address: '',
    phone: '',
    total_cart: JSON.parse(localStorage.getItem("total")),
    success: false,
    loading: false,
    errors: {},

    cart_counter: JSON.parse(localStorage.getItem("cart_counter")),
    new_dish_cart: [],
    cart_dishes: JSON.parse(localStorage.getItem("dishes")),
    cart: JSON.parse(localStorage.getItem("cart")),



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

        state.cart.forEach(dish => {
            dish.category_id = null
        });
        const data = {
            name: state.name,
            address: state.address,
            phone: state.phone,
            total_payment: state.total_cart,
            cart: state.cart,

        }
        axios
            .post(state.baseUrl + 'api/orders', data)
            .then((response => {

                state.success = response.data.success

                console.log(response);

                if (state.success) {
                    state.name = '',
                        state.address = '',
                        state.phone = '',
                        state.errors = {},
                        state.date_of_order = ''
                } else {
                    state.errors = response.data.errors
                }

                state.loading = false
            }))
            .catch(error => {
                if (error.response) {
                    console.log(error.response);
                }
            })
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
    getTotal_cart(cart_array) {
        let total = 0
        cart_array.forEach(dish => {
            const dish_total = dish.price * dish.qty
            total += dish_total
        });
        state.total_cart = localStorage.setItem("total", total)
        return total
    },
    addDishToCart(dish) {
        this.new_dish_cart = dish

        if (this.cart == null) {
            if (!localStorage.getItem("cart")) {
                localStorage.setItem("cart", "[]")
            }
            this.cart = JSON.parse(localStorage.getItem("cart"))
        }

        //faccio controllo non sia un inserimento in un carrello sbagliato
        if (this.cart.length > 0) {
            if (this.cart[0].restaurant_id != this.new_dish_cart.restaurant_id) {
                //apro la modale
                var modal = document.getElementById("myModal");
                modal.style.display = "block";
                return
            }
        }

        this.checkQtyDish(dish)

        this.total_cart = state.getTotal_cart(this.cart)

        this.getCartCounter()


    },
    checkQtyDish(data) {
        //valorizzo il piatto nel return che si vuole aggiungere

        let newdish = data

        //se il carrello ?? vuoto metto il piatto
        if (this.cart.length == 0) {
            //se il piatto non c'?? lo aggiungo e ci metto qty 1
            newdish.qty = 1

            this.cart.push(newdish)
            return
        }

        let found = false
        let index = 0
        //cerco il piatto nel cart se c'??
        for (let i = 0; i < this.cart.length; i++) {

            if (this.cart[i].slug == this.new_dish_cart.slug) {

                found = true
                index = i

            }
        }

        if (found) {
            //se nel carrello c'?? gi?? il piatto allora ne aggiungo solo la quantit??
            this.cart[index].qty = this.cart[index].qty + 1

        } else {
            //se il piatto non c'?? lo aggiungo e ci metto qty 1
            newdish.qty = 1
            this.cart.push(newdish)

        }

        localStorage.setItem("cart", JSON.stringify(this.cart))

        console.log(this.cart);
    },
    removeDishToCart(data) {
        // console.log(this.cart);
        for (var i = 0; i < this.cart.length; i++) {

            if (this.cart[i].id === data.id) {

                //controllo la qty, se 1 tolgo il piatto altrimenti la abbasso di 1
                if (this.cart[i].qty == 1) {
                    this.cart.splice(i, 1);
                } else {
                    this.cart[i].qty -= 1
                }

                this.total_cart = this.getTotal_cart(this.cart)


                break
            }

        }


        this.getCartCounter()

        localStorage.setItem("cart", JSON.stringify(this.cart))

        console.log(this.total_cart, 'tot');
    },
    getCartCounter() {
        this.cart_counter = 0

        if (this.cart == null) {
            this.cart_counter = 0
        } else {
            this.cart.forEach(dish => {
                this.cart_counter += dish.qty
            });
        }
        localStorage.setItem("cart_counter", JSON.stringify(this.cart_counter))

    },
    emptyCart() {
        localStorage.setItem("cart", "[]")
        this.cart = []
        this.getCartCounter()

        this.getTotal_cart(this.cart)
    }

})