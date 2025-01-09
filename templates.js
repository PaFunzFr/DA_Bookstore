
function renderFooter() {
    let footerRef = document.getElementById('footer');
    footerRef.innerHTML = `
        <section class="app-max-width footer-container">
            <div class="footer-left">
                <ul class="social-media-icons">
                    <li>
                        <a href="https://www.facebook.com" target="_blank">
                            <img src="./assets/img/02_footer/facebook.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank">
                            <img src="./assets/img/02_footer/Instagram.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/" target="_blank">
                            <img src="./assets/img/02_footer/twitter.png" alt="">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="footer-right" id="footer">
                <p>&copy; 2024 Epic Bookstore | Pictures by Patrick Frey. All rights reserved.</p>
            </div>
        </section> `
}