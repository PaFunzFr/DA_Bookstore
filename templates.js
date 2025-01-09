function renderHeader() {
    document.getElementById('header').innerHTML = `
        <section class="app-max-width header-container">
            <a href="" class="header-left">
                <img class="main-logo" src="./assets/img/01_header/logo.png" alt="Main Logo Fotogram">
                <h1 class="title hide-mobile">Bookstore 2.0<span> | epic books for epic people</h1>
            </a>
            <div class="header-right">
                <ul class="nav-bar">
                    <li><a href="#footer">ABOUT</a></li>
                </ul>
            </div>
        </section>
    `;
}

function renderBookCard() {
    document.getElementById('bookContent').innerHTML = `
     <span class="book-card">
                    <h2 class="book-title">Test</h2>
                    <div class="h-line"></div>
                    <img src="" alt="" class="book-img" title="">
                    <div class="h-line"></div>
                    <div class="book-infos">
                        <h2 class="price">34,99€</h2>
                        <div class="likes">
                            <p class="likes-count">3093</p>
                            <i src="" alt="" class="count-symbol"></i>
                        </div>
                    </div>
                    <table class="author-section">
                        <tr>
                            <td>Autor:</td>
                            <td class="book-author">Gerakt</td>
                        </tr>
                        <tr>
                            <td>Veröffentlicht:</td>
                            <td class="book-year">19478</td>
                        </tr>
                        <tr>
                            <td>Genre:</td>
                            <td class="book-genre">4</td>
                        </tr>
                    </table>
                    <div class="h-line"></div>
                    <h3>Kommentare</h3>
                    <table class="comment-section">
                        <tr>
                            <td class="comment-author">Kevin:</td>
                            <td class="comment-text">Ich habe etwas geschrieben</td>
                        </tr>
                    </table>
                    <div class="postComment">
                            <input id="commentField" onclick="emptyValue(event)" value="post your Comment..."></input>
                            <button onclick="postComment()">Senden</button>
                    </div>
                </span>
    ` 
}

function renderFooter() {
    document.getElementById('footer').innerHTML = `
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

