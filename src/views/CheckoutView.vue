<script>

import { state } from '../state.js'
// import { router } from '../router'

export default {
    name: 'CheckoutView',

    data() {
        return {
            state,
            email: '',
            cart: []
        }
    },
    methods: {
        addDishToCart(data) {
            // console.log(this.cart);
            this.cart.push(data)

            this.state.cart_counter = this.cart.length
            localStorage.setItem("cart", JSON.stringify(this.cart))
        },
        removeDishToCart(data) {
            // console.log(this.cart);
            for (var i = 0; i < this.cart.length; i++) {

                if (this.cart[i].id === data.id) {

                    this.cart.splice(i, 1);
                    break
                }

            }
        },
    },
    mounted() {
        this.cart = JSON.parse(localStorage.getItem("cart"))
        // console.log(this.cart);

        //payment
        var form = document.querySelector('#cardForm');
        var authorization = 'sandbox_g42y39zw_348pk9cgf3bgyw2b';

        braintree.client.create({
            authorization: authorization
        }, function (err, clientInstance) {
            if (err) {
                console.error(err);
                return;
            }
            createHostedFields(clientInstance);
        });

        function createHostedFields(clientInstance) {
            braintree.hostedFields.create({
                client: clientInstance,
                styles: {
                    'input': {
                        'font-size': '13px',
                        'font-family': 'courier, monospace',
                        'font-weight': 'lighter',
                        'color': '#ccc'
                    },
                    ':focus': {
                        'color': 'black'
                    },
                    '.valid': {
                        'color': '#8bdda8'
                    }
                },
                fields: {
                    number: {
                        selector: '#card-number',
                        placeholder: '4111 1111 1111 1111'
                    },
                    cvv: {
                        selector: '#cvv',
                        placeholder: '123'
                    },
                    expirationDate: {
                        selector: '#expiration-date',
                        placeholder: 'MM/YYYY'
                    },
                    postalCode: {
                        selector: '#postal-code',
                        placeholder: '11111'
                    }
                }
            }, function (err, hostedFieldsInstance) {
                if (err) {
                    console.error(err);
                    return;
                }
                var tokenize = function (event) {
                    event.preventDefault();

                    hostedFieldsInstance.tokenize(function (err, payload) {
                        if (err) {
                            $('#myModal').modal('show')

                            return;
                        }

                        //invio dati ordine al front-end
                        state.sendOrder();
                        //rimando alla SuccessView
                        state.router.push({ name: 'success' })
                    });
                };

                form.addEventListener('submit', tokenize, false);
            });
        }
        //end payment
    }

}

</script>

<template>
    <div class="container">

        <!-- Modal -->
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Ops!</h4>
                    </div>
                    <div class="modal-body">
                        <p>Something went wrong. Check your card details and try again.</p>
                    </div>
                    <div class="modal-footer">
                        <div type="button" class="btn btn-default" data-dismiss="modal">Click outside this window to try
                            again
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h1 class="py-5 text-center">You're almost there!</h1>
        <div class="row justify-content-center g-md-5 g-0 w-100">

            <!-- cart -->
            <div class="col-lg-4">
                <div class="my-card">
                    <div class="col-4 w-100">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <div class="fs-2 fw-bold">Cart</div>
                            <div v-if="state.total_cart == null" class="main-color fs-3 fw-bold">Total price: 0,00 ???</div>
                            <div v-else class="main-color fs-3 fw-bold">Total price: {{ state.total_cart.toFixed(2) + '???' }}
                            </div>
                        </div>

                        <div class="cart">
                            <div v-for="dish in state.cart">

                                <hr>
                                <div class="d-flex justify-content-around align-items-center">
                                    <div class="my-3">
                                        <h3 class="pr-5">{{ dish.name }}</h3>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="me-3 main-color">{{ dish.price + '???' }}</div>
                                            <div>Qty:<span> {{ dish.qty }}</span> </div>
                                        </div>
                                    </div>

                                    <div class="btn-wrapper d-flex flex-column justify-content-center">
                                        <button @click="state.addDishToCart(dish)"
                                            class="my-4 mx-3 btn btn-sm btn-primary rounded-pill px-3 fs-4">
                                            Add
                                        </button>
                                        <button type="button" @click="state.removeDishToCart(dish)"
                                            class=" my-4 mx-3 btn btn-sm btn-danger rounded-pill px-3 fs-4">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-8 col-sm-12 d-flex justify-content-center">
                <div class="flex-fill">
                    <div class="mb-3">
                        <span class="text-muted me-2">
                            Customer data
                        </span>
                        <span class="text-muted fs-4">* Required field</span>
                    </div>
                    <div class="form-wrapper">
                        <form action="/" method="post" id="cardForm">
                            <div class="customer-data my-card">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name*</label>
                                    <input type="text" name="name" id="name" v-model="state.name"
                                        class=" w-100 form-control" placeholder="John Doe" aria-describedby="helpId"
                                        required>
                                </div>
                                <div class="mb-3">
                                    <label for="address" class="form-label">Address*</label>
                                    <input type="text" name="address" id="address" v-model="state.address"
                                        class="form-control w-100" placeholder="" aria-describedby="helpId" required>
                                </div>
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Phone number*</label>
                                    <input type="text" name="phone" id="phone" v-model="state.phone"
                                        class="w-100 form-control" placeholder="0123456789" aria-describedby="helpId"
                                        required>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" name="email" id="email" v-model="email" class="w-100 form-control"
                                        placeholder="johndoe@example.it" aria-describedby="helpId">
                                </div>
                            </div>

                            <!-- payment -->
                            <div class="text-muted mt-5 mb-2">
                                Payment data
                            </div>
                            <div class="payment-data my-card">

                                <label class="hosted-fields--label" for="card-number">Card Number*</label>
                                <div id="card-number" class="hosted-field w-100 form-control"></div>

                                <label class="hosted-fields--label" for="expiration-date">Expiration Date*</label>
                                <div id="expiration-date" class="hosted-field w-100 form-control"></div>

                                <label class="hosted-fields--label" for="cvv">CVV*</label>
                                <div id="cvv" class="hosted-field w-100 form-control"></div>

                                <label class="hosted-fields--label" for="postal-code">Postal Code*</label>
                                <div id="postal-code" class="hosted-field w-100 form-control"></div>

                                <button type="submit" id="submit" class="mt-3 w-100 my-btn"
                                    value="Purchase">Purchase</button>
                            </div>
                            <!-- /payment -->
                        </form>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/general.scss';

.cart {
    max-height: 330px;
    overflow-y: overlay;
}

:root {
    --black: #1f1f1f;
    --white: #fff;
    --main-color: #e29436;
    --main-color-dark: #cf4835;
    --deep-main-color: #ffc727;
    --bg-main-color: #fffaf1;
    --btn-main-color: #fff4d4;
    --footer-main-color: #fff9e9;
    --grey: #737373;
    --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
    --transition: all 0.2s linear;
}

.container {

    h1 {
        font-size: 40px;
    }

    .form-wrapper {
        margin-bottom: 10%;
    }

    input {
        font-size: 15px;
        width: 65%;
    }

    .order-card {
        width: 65%;
        height: 25%;
        padding: 1.5rem;
        box-shadow: 0 0 3px 0px rgb(192, 192, 192);
        border-radius: 5px;

        img {
            width: 25%;
            height: 25%;
            border-radius: 5px;
        }

        .btn-primary {
            background-color: var(--main-color);
            border: var(--main-color-dark);
            color: #07051a;
            transition: 0.5s;

            &:hover {
                background-color: var(--main-color-dark);
            }
        }

    }
}

//payment
.hosted-field {
    height: 35px;
    width: 65%;
    padding: 12px;
    display: inline-block;
    box-shadow: none;
    // font-weight: 600;
    // font-size: 14px;
    // border-radius: 6px;
    // border: 1px solid #dddddd;
    // line-height: 20px;
    // background: #fcfcfc;
    // margin-bottom: 12px;
    // background: linear-gradient(to right, white 50%, #fcfcfc 50%);
    // background-size: 200% 100%;
    // background-position: right bottom;
    // transition: all 300ms ease-in-out;
}

.hosted-fields--label {
    // font-family: courier, monospace;
    // text-transform: uppercase;
    // font-size: 14px;
    display: block;
    margin-bottom: 6px;
}

.button-container {
    display: block;
    text-align: center;
}

.button {
    cursor: pointer;
    font-weight: 500;
    line-height: inherit;
    position: relative;
    text-decoration: none;
    text-align: center;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: inline-block;
}

.button--small {
    padding: 10px 20px;
    font-size: 0.875rem;
}

.button--green {
    outline: none;
    background-color: #64d18a;
    border-color: #64d18a;
    color: white;
    transition: all 200ms ease;
}

.button--green:hover {
    background-color: #8bdda8;
    color: white;
}

.braintree-hosted-fields-focused {
    border: 1px solid #64d18a;
    border-radius: 1px;
    background-position: left bottom;
}

.braintree-hosted-fields-invalid {
    border: 1px solid #ed574a;
}

.braintree-hosted-fields-valid {}

// #cardForm {
//     max-width: 50.75em;
//     margin: 0 auto;
//     padding: 1.875em;
// }
//end payment
.my-btn {
    border: 1px solid transparent;

    &:hover {
        color: var(--main-color);
        border-color: var(--main-color);
    }
}
</style>