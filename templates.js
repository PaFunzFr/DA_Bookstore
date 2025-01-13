function renderHeader() {
    document.getElementById('header').innerHTML = `
        <section class="app-max-width header-container">
            <a href="" class="header-left">
                <img class="main-logo" src="./assets/img/01_header/logo.png" alt="Main Logo Fotogram">
                <h1 class="title hide-mobile">My Library</h1>
            </a>
            <div class="header-right">
                <ul class="nav-bar">
                    <li><a href="">Favorites</a></li>
                    <li>|</li>
                    <li id="currentUser">${JSON.parse(localStorage.getItem("user")) || []}</li>
                    <li>|</li>
                    <li id="logoutBtn" class="logout-button" onclick="userLogout()">logout</li>
                </ul>
            </div>
        </section>
    `;
}

function renderBookCard(index) {
    document.getElementById('bookContent').innerHTML += `
     <span class="book-card">
                    <h2 class="book-title">${books[index].name}</h2>
                    <div class="h-line"></div>
                    <img src=${books[index].bookCover} alt="" class="book-img" title="">
                    <div class="h-line"></div>
                    <div class="book-infos">
                        <h2 class="price">${books[index].price} €</h2>
                        <div class="likes">
                            <p id="likesCount${index}"class="likes-count">${books[index].likes}</p>
                            <img src="./assets/img/03_icons/heart-empty.png" alt="" class="count-symbol" onclick="clickHeartIcon(event, ${index})" onmouseover="scaleOnHoverIn(event)" onmouseleave="scaleOnHoverOut(event)">
                        </div>
                    </div>
                    <table class="author-section">
                        <tr>
                            <td>Autor:</td>
                            <td class="book-author">${books[index].author}</td>
                        </tr>
                        <tr>
                            <td>Veröffentlicht:</td>
                            <td class="book-year">${books[index].publishedYear}</td>
                        </tr>
                        <tr>
                            <td>Genre:</td>
                            <td class="book-genre">${books[index].genre}</td>
                        </tr>
                    </table>
                    <div class="h-line"></div>
                    <h3>Kommentare</h3>
                    <table class="comment-section id="commentsContainer${index}">
                        ${showAllComments(index)}
                    </table>
                    <div class="postComment">
                            <input id="commentField${index}" onclick="emptyValue(event)" value="post your Comment..."></input>
                            <button onclick="postComment(${index})">Senden</button>
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

