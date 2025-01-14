function renderHeader() {
    document.getElementById('header').innerHTML = `
        <section class="app-max-width header-container">
            <a href="" class="header-left">
                <img class="main-logo" src="./assets/img/01_header/logo.png" alt="Main Logo Fotogram">
                <h1 class="title hide-mobile">My Library</h1>
            </a>
            <div class="header-right">
                <ul class="nav-bar">
                    <li class="favorite-btn hide-mobile hide-on-logout" onclick="showFavorites()">Favorites</li>
                    <li class="show-mobile hide-on-logout" onclick="showFavorites()"><img class="count-symbol" src="./assets/img/03_icons/heart-full.png" alt=""></li>
                    <li class="hide-on-logout">|</li>
                    <li id="currentUser" class="hide-on-logout">${JSON.parse(localStorage.getItem("user")) || []}</li>
                    <li class="hide-on-logout">|</li>
                    <li id="logoutBtn" class="logout-button hide-on-logout" onclick="userLogout()">logout</li>
                </ul>
            </div>
        </section>
    `;
}

function renderLoginScreen() {
    document.getElementById('loginSection').innerHTML = `
        <h2 class="welcome-title">Welcome to My Library</h2>
        <p>Please login with your <span class="highlighted">Username</span><br>to write comments</p>
        <input class="login-input" id="loginName" maxlength="10"></input>
        <button class="login-button" onclick="loginUser()">Login</button>
    `;
}

function renderBookCard(index) {
    document.getElementById('bookContent').innerHTML += `
    <span class="book-card" id="bookCard${index}">
        <h2 class="book-title">${books[index].name}</h2>
        <div class="h-line"></div>
        <img src=${books[index].bookCover} alt="" class="book-img" title="">
        <div class="h-line"></div>
        <div class="book-infos">
            <h2 class="price">${books[index].price} €</h2>
            <div class="likes">
                <p id="likesCount${index}"class="likes-count">${JSON.parse(localStorage.getItem(`bookLikes${index}`)).likes}</p>
                <img id="heartIcon${index}" src="${JSON.parse(localStorage.getItem(`bookLikes${index}`)).heartIcon}" alt="" class="count-symbol" onclick="clickHeartIcon(event, ${index})" onmouseover="scaleOnHoverIn(event)" onmouseleave="scaleOnHoverOut(event)">
            </div>
        </div>
        <table class="author-section">
            <tr>
                <td>Author:</td>
                <td class="book-author">${books[index].author}</td>
            </tr>
            <tr>
                <td>Published:</td>
                <td class="book-year">${books[index].publishedYear}</td>
            </tr>
            <tr>
                <td>Genre:</td>
                <td class="book-genre">${books[index].genre}</td>
            </tr>
        </table>
        <div class="h-line"></div>
        <h3>Comments</h3>
        <table class="comment-section id="commentsContainer${index}">
            ${showAllComments(index)}
        </table>
        <div class="postComment">
                <input class="comment-input" id="commentField${index}" onclick="emptyValue(event)" value="post your Comment..."></input>
                <button class="comment-btn" onclick="postComment(${index})">submit</button>
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
                <p>&copy; 2025 by Patrick Frey | it's a personal library, no shop.</p>
            </div>
        </section> `
}

