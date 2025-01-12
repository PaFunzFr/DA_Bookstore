let comments = books;

const commentStorage = JSON.parse(localStorage.getItem(`${comments} Title:`)) || [];
const favouriteBookStorage = JSON.parse(localStorage.getItem(`${comments} Text:`)) || [];

function renderInit() {
  //checkUserLogin()
  renderHeader();
  renderAllBookCards();
  renderFooter();
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


function loginUser() {
  closeLoginMenu();
}

/*
function checkUserLogin() {
  if (document.getElementById('loginName').value === "") {
    closeLoginMenu();
  }
}

*/

function closeLoginMenu() {
  document.getElementById('loginSection').style.display = "none";
  document.getElementById('mainSection').style.display = "flex";
}

/* 

for (i = 0; i < books.length; i++) {
  console.log(`Buch: ${books[i].name}`);
  console.log(`Autor: ${books[i].author}`);
  console.log(`Likes: ${books[i].likes}`);
  console.log(`Liked: ${books[i].liked}`); // true / false
  console.log(`UVP: ${books[i].price}`);
  console.log(`Veröffentlicht: ${books[i].publishedYear}`);
  console.log(`Genre: ${books[i].genre}`);
  console.log(`Bild: ${books[i].bookCover}`);
  showAllComments(i);
  console.log('--------------------');
}

*/