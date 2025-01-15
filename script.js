function renderInit() {
  renderHeader();
  renderLoginScreen();
  loadDataBase();
  renderAllBookCards();
  renderFooter();
  checkUserLogin();
}

// initialize json data (likes & comments) to localStorage
// only adding if there is a new key for storage => (!localStorage.getItem(key))
function loadDataBase() {
  for (i = 0; i < books.length; i++) {
    let likeObject = {
      likes: books[i].likes,
      liked: books[i].liked,
      heartIcon: "./assets/img/03_icons/heart-empty.png",
    };
    if (!localStorage.getItem(`bookLikes${i}`)) {
      localStorage.setItem(`bookLikes${i}`, JSON.stringify(likeObject));
    }
    if (!localStorage.getItem(`bookComments${i}`)) {
      localStorage.setItem(
        `bookComments${i}`,
        JSON.stringify(books[i].comments)
      );
    }
  }
}

function renderAllBookCards() {
  document.getElementById("bookContent").innerHTML = ``;
  for (let i = 0; i < books.length; i++) {
    renderBookCard(i);
  }
}

// load all comments from localStorage
function showAllComments(bookKeyIndex) {
  let bookKey = `bookComments${bookKeyIndex}`;
  let bookComments = JSON.parse(localStorage.getItem(bookKey)) || [];
  let commentsHTML = "";
  for (let index = bookComments.length - 1; index >= 0; index--) {
    commentsHTML += `
          <tr>
              <td class="comment-author">${bookComments[index].name}:</td>
              <td class="comment-text">${bookComments[index].comment}</td>
          </tr>`;
  }
  return commentsHTML;
}

function postComment(index) {
  let commentInput = document.getElementById(`commentField${index}`).value;
  let newComment = {
    name: JSON.parse(localStorage.getItem("user")),
    comment: commentInput,
  };
  updateComments(index, newComment);
  document.getElementById(`commentField${index}`).value = "";
  renderInit();
}

function updateComments(index, object) {
  let bookKey = `bookComments${index}`;
  let storedComments = JSON.parse(localStorage.getItem(bookKey)) || [];
  storedComments.push(object);
  localStorage.setItem(bookKey, JSON.stringify(storedComments));
}

function emptyValue(event) {
  event.target.value = "";
}

function showEmptyHeart(event) {
  event.target.src = "./assets/img/03_icons/heart-empty.png";
}

function clickHeartIcon(event, index) {
  let likesData = JSON.parse(localStorage.getItem(`bookLikes${index}`));
  if (!likesData.liked) {
    makeFavorite(index, likesData);
    popColorScale(event);
  } else {
    noFavorite(index, likesData);
    popColorScale(event);
    setTimeout(function () {
      showEmptyHeart(event);
    }, 200);
  }
}

function makeFavorite(index, likesData) {
  isHeartClicked = true;
  let currentLikes = likesData.likes;
  currentLikes++;
  let likeObject = likeObjectTemplate(currentLikes, true, "full");
  localStorage.setItem(`bookLikes${index}`, JSON.stringify(likeObject));
  renderAllBookCards(index);
}

function noFavorite(index, likesData) {
  isHeartClicked = false;
  let currentLikes = likesData.likes;
  currentLikes--;
  let likeObject = likeObjectTemplate(currentLikes, false, "empty");
  localStorage.setItem(`bookLikes${index}`, JSON.stringify(likeObject));
  renderAllBookCards(index);
}

function popColorScale(event) {
  event.target.style.filter =
    "invert(10%) sepia(45%) saturate(6620%) hue-rotate(339deg) brightness(200%) contrast(101%)";
  event.target.style.transform = "scale(1.2)";
  setTimeout(function () {
    event.target.style.filter =
      "invert(10%) sepia(45%) saturate(6620%) hue-rotate(339deg) brightness(99%) contrast(101%)";
    event.target.style.transform = "scale(1)";
  }, 200);
}

function scaleOnHoverIn(event) {
  event.target.style.transform = "scale(1.1)";
}

function scaleOnHoverOut(event) {
  event.target.style.transform = "scale(1)";
}

function checkUserLogin() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    closeLoginMenu();
  } else {
    hideElementsHeader();
  }
}

function hideElementsHeader() {
  const hiddenElements = document.querySelectorAll(".hide-on-logout");
  for (let i = 0; i < hiddenElements.length; i++) {
    hiddenElements[i].style.display = "none";
  }
}

function loginUser() {
  let userName = document.getElementById("loginName").value;
  if (userName != "") {
    localStorage.setItem("user", JSON.stringify(userName));
    closeLoginMenu();
    renderInit();
  }
}

function userLogout() {
  localStorage.removeItem("user");
  resetFavorites();
  showLoginMenu();
  renderInit();
}

function closeLoginMenu() {
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("mainSection").style.display = "flex";
}

function showLoginMenu() {
  document.getElementById("loginSection").style.display = "flex";
  document.getElementById("mainSection").style.display = "none";
}

function resetFavorites() {
  for (i = 0; i < books.length; i++) {
    let likesData = JSON.parse(localStorage.getItem(`bookLikes${i}`));
    let currentLikes = likesData.likes;
    let likeObject = likeObjectTemplate(currentLikes, false, "empty");
    localStorage.setItem(`bookLikes${i}`, JSON.stringify(likeObject));
    renderAllBookCards(i);
  }
}

function showFavorites() {
  for (i = 0; i < books.length; i++) {
    let likesData = JSON.parse(localStorage.getItem(`bookLikes${i}`));
    if (!likesData.liked) {
      document.getElementById(`bookCard${i}`).style.display = "none";
    }
  }
}

function likeObjectTemplate(likeCount, likeStatus, heartStatus) {
  return {
    likes: likeCount,
    liked: likeStatus,
    heartIcon: `./assets/img/03_icons/heart-${heartStatus}.png`,
  };
}


