<script>
export default {
    name: 'RestaurantView'
}
</script>

<template>
    <section class="home">
        <div class="container my-5">
            <div class="row">
                <!-- info del ristorante -->
                <div class="col-3">
                    <div class="my-card text-center">
                        <img class="mb-4" src="https://www.travel365.it/foto/altitude-at-shangri-la.jpg" alt="">
                        <h1 class="mb-4">Titolo Ristorante</h1>
                        <div class="mb-4 tipology">tipologia - tipologia</div>
                        <div class="mb-4">indirizzo ristorante</div>
                        <div class="mb-4">numero di telefono</div>

                    </div>
                </div>
                <!-- menu -->
                <div class="col-6 px-5">
                    <div class="menu text-center">
                        <h1 class="pb-5">Piatti offerti da {nome ristorante}</h1>
                        <div class="dish text-start my-card">
                            <div class="d-flex">
                                <div class="col-8">
                                    <h2>nome piatto</h2>
                                    <div>descrizione</div>
                                    <div><small>prezzo</small></div>
                                    <a class="my-btn my-3">Aggiungi al carrello</a>
                                </div>
                                <div class="col-4">
                                    <img src="https://www.giallozafferano.it/images/219-21928/Spaghetti-alla-Carbonara_650x433_wm.jpg"
                                        alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- carrello -->
                <div class="col-3">
                    <div class="my-card">
                        <h1>Il tuo ordine</h1>
                        <ul>
                            <li>ordine</li>
                            <li>ordine</li>
                        </ul>
                        <a class="my-btn">Go to checkout</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@import '../styles/general.scss';

.my-card {
    padding: 1.5rem;
    box-shadow: 0 0 6px 0px rgb(192, 192, 192);
    border-radius: 5px;

    .tipology {
        color: #e29436;
    }

    img {
        border-radius: 5px;

    }

    .my-btn {
        border-radius: 30px;
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
</style>