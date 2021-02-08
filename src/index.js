function isBookRead(books, titleToSearch) {
    const book= books.find(book => book.title === titleToSearch);

    if(book===null || book===undefined)
    {
        return false;
    }
    else 
    {
        return book.isRead;
    } 
}

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false