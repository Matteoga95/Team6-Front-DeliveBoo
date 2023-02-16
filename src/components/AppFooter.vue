<script>
import { state } from '../state';

export default {
    name: 'AppHeader',
    data() {
        return {
            state
        }
    },
}


</script>


<template>
    <footer class="footer">
        <div class="top">
            <div class="content">
                <a href="" class=" logo">Delive<span class="yellow">boo</span></a>
                <p>
                    Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
                    porttitor consectetur pretium. Euismod imperdiet
                </p>
            </div>

            <div class="links">
                <div class="link">
                    <h4>Contact Information</h4>
                    <div>
                        <font-awesome-icon class="faa  mt-5" icon="fa-solid fa-location-dot" />
                        <span>Viale Italia 332, Milano (MI),20019</span>
                    </div>
                    <div>
                        <font-awesome-icon class="faa" icon="fa-solid fa-envelope" />
                        <span>deliveboo@gmail.com</span>
                    </div>
                </div>

                <div class="link">
                    <h4>Quick Links</h4>
                    <a href="#">Services</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Download</a>
                </div>

                <div class="link">
                    <h4>Legal</h4>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Term of Use</a>
                    <a href="#">Conditions</a>
                    <a href="#">Location</a>
                </div>

                <div class="link">
                    <h4>Connect with Us</h4>
                    <div>
                        <font-awesome-icon class="faa px-2" icon=" fa-brands fa-instagram" />
                        <span>Instagram</span>
                    </div>
                    <div>
                        <font-awesome-icon class="faa px-2" icon="fa-brands fa-twitter" />
                        <span>Twitter</span>
                    </div>
                    <div>
                        <font-awesome-icon class="faa px-2" icon="fa-brands fa-facebook" />
                        <span>Facebook</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <p>Copyright © 2023-2023 Deliveboo Company S.R.L. All rights reserved.</p>
        </div>
</footer>
</template>
<style lang="scss" scoped>
.dropdown-menu li {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.badge {
    padding-left: 9px;
    padding-right: 9px;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
    font-size: large;
}

.label-warning[href],
.badge-warning[href] {
    background-color: #c67605;
}

#lblCartCount {
    font-size: 12px;
    background: #cf4835;
    color: #fff;
    padding: 0px 5px;
    vertical-align: top;
    margin-left: -5px;
    margin-top: -10px;
}

.logo img {
    width: 50%;
}
</style>