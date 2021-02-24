class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(newIsCheckedOut) {
        this._isCheckedOut = newIsCheckedOut;
    }

    getAverageRating() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const sum = this._ratings.reduce(reducer);
        const average = sum / this._ratings.length;
        return average.toFixed(1);
    }

    toggleCheckedOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }

    addRating(rating) {
        this._ratings.push(rating);
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }
    
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runtime) {
        super(title);
        this._director = director;
        this._runtime = runtime;
    }

    get director() {
        return this._director;
    }
    
    get runtime() {
        return this._runtime;
    }
}

class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }
    
    get songs() {
        return this._songs;
    }

    shuffle() {
        for (let i = 0; i < this.songs.length; i++) {
            let randomIndex = Math.floor(Math.random() * this.songs.length); 
            let temp = this.songs[i];
            this.songs[i] = this.songs[randomIndex];
            this.songs[randomIndex] = temp;
        }
    }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log('average: ' + historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log('average: ' + speed.getAverageRating());

const rouge = new CD('rouge', 'jjg', [1, 2, 3, 4, 5]);
console.log(rouge.title + rouge.songs);
rouge.shuffle();
console.log(rouge.title + rouge.songs);

