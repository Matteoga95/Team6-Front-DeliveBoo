<script>
export default {
    name: "HelloWorld",
}


/* =========== Show Navbar =========== */
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("show");
});

/* =========== Scroll Position =========== */

const header = document.querySelector(".header");
const scrollLink = document.querySelectorAll(".navbar a:not(:last-child)");

/* =========== Smooth Scroll =========== */
Array.from(scrollLink).map((link) => {
    link.addEventListener("click", (e) => {
        // Prevent Default
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - 90;

        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth",
        });
        navbar.classList.remove("show");
    });
});

/* =========== Preloader =========== */
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    setTimeout(() => {
        preloader.style.display = "none";
    }, 2000);
});

/* =========== Scroll Top =========== */
const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
});

window.addEventListener("scroll", (e) => {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 300) {
        scrollTop.classList.add("show");
    } else {
        scrollTop.classList.remove("show");
    }
});

</script>

<template>
    <!-- Preloader -->
    <!-- <div class="preloader">
        <img src="../assets/img/preloader.gif" alt="" />
    </div> -->

    <header class="header">
        <a href="/" class="logo">Delive<span class="yellow">roo</span></a>

        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="" class="btn">Make an Order</a>
        </nav>

        <!-- Hamburger -->
        <div class="hamburger">
            <img src="../assets/img/grid-outline.svg" alt="" />
        </div>
    </header>

    <!-- Home -->
    <section class="home" id="home">
        <div class="content">
            <h1>Order Your Product <span class="yellow">Easier & Faster.</span></h1>
            <p>
                Delivero is a leading global online food delivery marketplace,
                connecting consumers and restaurants through its platform in 24
                countries.
            </p>
            <a href="#" class="home-btn">Go to Menu</a>
        </div>
        <div class="image">
            <img src="../assets/img/Delivery address.svg" alt="" />
        </div>
    </section>

    <!-- Services -->
    <section class="services" id="services">
        <div class="top">
            <h2><span class="yellow">Why</span> We are the Best</h2>
            <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print,
                and publishing industries for previewing layouts and visual mockups.
                Lorem ipsum is placeholder.
            </p>
        </div>

        <div class="bottom">
            <div class="box">
                <img src="../assets/img/delivery-man.svg" alt="" />
                <h4>Free Delivery</h4>
                <p>
                    Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
                    porttitor consectetur pretium. Euismod imperdiet pellentesque cursus
                    in netus.
                </p>
                <a href="#">View More <img src="../assets/img/btn-arrow.svg" alt="" /> </a>
            </div>
            <div class="box">
                <img src="../assets/img/fast-food.svg" alt="" />
                <h4>Healthy Foods</h4>
                <p>
                    Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
                    porttitor consectetur pretium. Euismod imperdiet pellentesque cursus
                    in netus.
                </p>
                <a href="#">View More <img src="../assets/img/btn-arrow.svg" alt="" /> </a>
            </div>
            <div class="box">
                <img src="../assets/img/order-food.svg" alt="" />
                <h4>Online Ordering</h4>
                <p>
                    Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
                    porttitor consectetur pretium. Euismod imperdiet pellentesque cursus
                    in netus.
                </p>
                <a href="#">View More <img src="../assets/img/btn-arrow.svg" alt="" /> </a>
            </div>
        </div>
    </section>

    <!-- About #1 -->
    <section class="about" id="about">
        <div class="image">
            <img src="../assets/img/illus riding.svg" alt="" />
        </div>
        <div class="content">
            <h3><span class="yellow">Order</span> anytime and anywhere</h3>
            <p>
                Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
                porttitor consectetur pretium. Euismod imperdiet pellentesque cursus
                in netus.
            </p>
            <a href="#" class="btn">Make an Offer</a>
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
            <a href="#" class="btn">Make an Offer</a>
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
            <a href="#" class="btn">Track Now</a>
        </div>
    </section>

    <!-- App -->
    <section class="appss" id="contact">
        <div class="image">
            <img src="../assets/img/splash with mobile.svg" alt="" />
        </div>
        <div class="content">
            <h3>Place your order through our app</h3>
            <p>
                You can easily place your order using our mobile app. Now you can
                download our app for both IOS and Android mobiles.
            </p>
            <div class="links">
                <img src="../assets/img/app-store.png" alt="" />
                <img src="../assets/img/google-play.png" alt="" />
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="top">
            <div class="content">
                <a href="" class="logo">Delive<span class="yellow">roo</span></a>
                <p>
                    Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
                    porttitor consectetur pretium. Euismod imperdiet
                </p>
            </div>

            <div class="links">
                <div class="link">
                    <h4>Contact Information</h4>
                    <div>
                        <img src="../assets/img/location-cross.svg" alt="" />
                        <span>122,Albert St, Port Melbourne,Vic 3207.</span>
                    </div>
                    <div>
                        <img src="../assets/img/sms-tracking.svg" alt="" />
                        <span>deliveroo@gmail.com</span>
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
                        <img src="../assets/img/instagram.svg" alt="" />
                        <span>Instagram</span>
                    </div>
                    <div>
                        <img src="../assets/img/twitter.svg" alt="" />
                        <span>Twitter</span>
                    </div>
                    <div>
                        <img src="../assets/img/facebook.svg" alt="" />
                        <span>Facebook</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <p>Copyright © 2010-2021 Deliveroo Company S.L. All rights reserved.</p>
        </div>
    </footer>

    <!-- Go To Top -->
    <div class="scroll-top">
        <img src="../assets/img/arrow-up-outline.svg" alt="" />
    </div>

</template>

<style lang="scss" scoped>
// h1 {
//     font-size: 1.4em;

//     span.yellow {
//         color: yellow;
//         text-decoration: underline;
//     }
// }
</style>