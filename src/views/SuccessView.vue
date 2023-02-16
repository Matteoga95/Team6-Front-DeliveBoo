<script>
import { state } from '../state'

export default {
    name: 'SuccessView',
    data() {
        return {
            state
        }
    },
    mounted() {
        state.emptyCart()
    }
}
</script>

<template>
    <div class="container my-5 text-center fw-b fs-1">
        <div class="alert alert-success p-5">
            Order success!
        </div>
</div>
</template>


<style lang="scss" scoped>@import '../styles/general.scss';</style>