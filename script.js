function renderInit() {
  renderHeader();
  renderLoginScreen();
  renderAllBookCards();
  renderFooter();
  loadDataBase()
  checkUserLogin()
}

// initialize Comments to localstorage
// only adding if there is a new key for storage => (!localStorage.getItem(key))
function loadDataBase() {
  for (i = 0; i < books.length; i++) {
    let key = `bookComments${i}`;
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(books[i].comments));
    }
  }
}

function showAllComments(bookKeyIndex) {
  let bookKeyKey = `bookComments${bookKeyIndex}`;
  let bookComments = JSON.parse(localStorage.getItem(bookKeyKey)) || [];
  let commentsHTML = ''; 
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
    comment: commentInput
  };
  updateComments(index, newComment);
  document.getElementById(`commentField${index}`).value = '';
  renderInit()
}

function updateComments(index, object) {
  let bookKey = `bookComments${index}`;
  let storedComments = JSON.parse(localStorage.getItem(bookKey)) || [];
  storedComments.push(object);
  localStorage.setItem(bookKey, JSON.stringify(storedComments));
}

function loginUser() {
  let userName = document.getElementById('loginName').value;
  if (userName != "") {
  localStorage.setItem("user", JSON.stringify(userName));
  closeLoginMenu();
  renderInit()
  }
}

function renderAllBookCards() {
  document.getElementById('bookContent').innerHTML = ``; 
  for (let i = 0; i < books.length; i++) {
    renderBookCard(i);
  }
};

function emptyValue(event) {
    event.target.value = '';
}

function showFullHeart(event) {
  event.target.src = "./assets/img/03_icons/heart-full.png"
}

function showEmptyHeart(event) {
    event.target.src = "./assets/img/03_icons/heart-empty.png"
}

function clickHeartIcon(event, index) {
  if (!books[index].liked) {
    makeFavourite(index);
    showFullHeart(event);
    popColorScale(event);
  } else {
    noFavourite(index)
    popColorScale(event);
    setTimeout(function() {
      showEmptyHeart(event);
    }, 200);
  }
}

function makeFavourite(index) {
  isHeartClicked = true;
  books[index].liked = true;
  books[index].likes ++;
  document.getElementById(`likesCount${index}`).innerHTML = `${books[index].likes}`;
}

function noFavourite(index) {
  isHeartClicked = false;
  books[index].liked = false;
  books[index].likes --
  document.getElementById(`likesCount${index}`).innerHTML = `${books[index].likes}`;
}

function popColorScale(event) {
  event.target.style.filter = "invert(10%) sepia(45%) saturate(6620%) hue-rotate(339deg) brightness(200%) contrast(101%)";
  event.target.style.transform = "scale(1.2)";
  setTimeout(function() {
    event.target.style.filter = "invert(10%) sepia(45%) saturate(6620%) hue-rotate(339deg) brightness(99%) contrast(101%)";
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
function closeLoginMenu() {
  document.getElementById('loginSection').style.display = "none";
  document.getElementById('mainSection').style.display = "flex";
}

function showLoginMenu() {
  document.getElementById('loginSection').style.display = "flex";
  document.getElementById('mainSection').style.display = "none";
}

function userLogout() {
  localStorage.removeItem("user");
  showLoginMenu()
  renderInit()
}
