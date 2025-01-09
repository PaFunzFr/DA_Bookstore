
function renderAll() {

}
console.log(books);

for (i = 0; i < books.length; i++) {
  console.log(`Buch: ${books[i].name}`);
  console.log(`Autor: ${books[i].author}`);
  console.log(`Likes: ${books[i].likes}`);
  console.log(`Liked: ${books[i].liked}`);
  console.log(`UVP: ${books[i].price}`);
  console.log(`Veröffentlicht: ${books[i].publishedYear}`);
  console.log(`Genre: ${books[i].genre}`);
  showAllComments(i);
  console.log('--------------------');
}

function showAllComments(i) {
    let bookComments = books[i].comments;
    for (let i = 0; i < bookComments.length; i++) {
      console.log(`Name: ${bookComments[i].name}`);
      console.log(`Kommentar: ${bookComments[i].comment}`);
      console.log('--------------------');
    }
}