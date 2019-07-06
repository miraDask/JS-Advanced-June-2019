class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        if(room !== 'closet' && room !== 'bedRoom' && room !== 'livingRoom') {
            throw new Error(`Cannot have book shelf in ${room}`);
        }

        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre = '') {
        if(this.shelfCondition === 0) {
            this.shelf.shift();
        }

        const currentBook = {
            bookName,
            bookAuthor,
            genre
        }

        this.shelf.push(currentBook);
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }

    throwAwayBook(bookName) {
       this.shelf = this.shelf.filter(b => b.bookName !== bookName);
    }

    showBooks(genre) {
        let allBooksFromGenre = this.shelf.filter(b => b.genre === genre);
        let output = `Results for search "${genre}":\n`;
        allBooksFromGenre = allBooksFromGenre.map(b => `\uD83D\uDCD6 ${b.bookAuthor} - "${b.bookName}"`);
        output += allBooksFromGenre.join('\n');

        return output;
    }

    toString() {
        if(this.shelf.length === 0) {
            return 'It\'s an empty shelf';
        }

        let output = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
        const allBooks = this.shelf.map(b => `\uD83D\uDCD6 "${b.bookName}" - ${b.bookAuthor}`);
        output += allBooks.join('\n');

        return output;
    }
}

let livingRoom = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Svetlin Nakov");
    console.log(livingRoom.toString());


