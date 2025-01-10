function renderInit() {
  renderHeader();
  renderBookCard();
  renderBookCard();
  renderBookCard();
  renderBookCard();
  renderFooter();
}

console.log(books);

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

function showAllComments(i) {
    let bookComments = books[i].comments;
    for (let index = 0; index < bookComments.length; index++) {
      console.log(`Name: ${bookComments[index].name}`);
      console.log(`Kommentar: ${bookComments[index].comment}`);
      console.log('--------------------');
    }
}

function emptyValue(event) {
    event.target.value = '';
}

function showFullHeart(event) {
  event.target.src = "./assets/img/03_icons/heart-full.png"
}

function showEmptyHeart(event) {
  event.target.src = "./assets/img/03_icons/heart-empty.png"
}

isHeartClicked = false;

function clickHeartIcon(event) {
  if (!isHeartClicked) {
    showFullHeart(event);
    isHeartClicked = true;
  } else {
    showEmptyHeart(event);
    isHeartClicked = false;
  }
} 