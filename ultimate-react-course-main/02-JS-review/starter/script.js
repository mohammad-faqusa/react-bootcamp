const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount;
  // const librarything = book.reviews.librarything.reviewsCount; //Cannot read properties of undefined (reading 'reviewsCount')
  const librarything = book.reviews?.librarything?.reviewsCount; //NaN

  return goodread + librarything;
}

/* 
// destructureing

const books = getBooks();

const book = getBook(2);

// const title = book.title;
// const author = book.author;

// title;
// author;

// console.log(author, title);

// this is better way :
const {
  title,
  author,
  otherVariable,
  pages,
  publicationDate,
  genres,
  hasMovieAdaptation,
} = getBook(2);

book;

title;
author;

otherVariable;



//destructuring with arrays

console.log(author, title, genres, publicationDate);

// const primaryGenre = genres[0];
// const seconderyGenre = genres[1];

const [primaryGenre, seconderyGenre, ...otherGenres] = genres;
// first element primaryGenre for index 0 of array
// second element  seconderyGenre kfor index 1 of array

console.log(primaryGenre, seconderyGenre, otherGenres);

const newGenres = [...genres, "epic fantasy"];

newGenres;

//======================spread operator for objects=======================

book;

const updatedBooke = {
  ...book,
  moviePublicationDate: "2001-10-10",
  pages: 1200,
};

updatedBooke;

// =============================== 20 template literals =====================================
let summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}, the book has ${
  hasMovieAdaptation ? "adapted as a movie" : "has not adapted as move"
}`;
summary; // 'The Cyberiad, a 295-page long book, was written by Stanislaw Lem and published in 1965, the book has has not adapted as move'

// =============================== 21 ternary operator  =====================================

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;

console.log(`The book has ${pagesRange} pages`); //'The book has less than 1000 pages'

//===================================22. arrow functions ====================================================

// the traditional way, which we use all time for longer functions :
// function getyear(str) {
//   // this is function declaration
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0]; // this is function expression

// const getYear2 = (str) => {
//   return str.split("-")[0]; // same to previous
// }; // this is function expression

// cosnt getYear = (str, a , b) => str.split("-")[0]; // you can place any number of parameter s

summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}, the book has ${
  hasMovieAdaptation ? "adapted as a movie" : "has not adapted as move"
}`;

summary;

//===================================23. short circuiting and logical operators  ====================================================

console.log(true && "Some String"); //'Some String'
console.log(false && "Some String"); //false
console.log(hasMovieAdaptation && "This book has a movie"); // false

// falsy: 0, '', null, undefined

console.log("mohammad" && "Some string"); // 'Some string'
console.log(0 && "mohammad" && "Some string"); // 0

console.log(true || "Some String "); // true
console.log(false || "Some String "); // Some String

console.log(book.translations.spanish); // undefined
console.log(books[0].translations.spanish); // 'El señor de los anillos'

console.log(book.translations.spanish || "NOT TRANSLATED"); // 'NOT TRANSLATED'

console.log(book.reviews.librarything.reviewsCount || "no data"); // 'no data'

const count = book.reviews.librarything.reviewsCount ?? "no data"; // Nullish coalescing operator (??)
count; // 0, will return the second value if the first value is (null or undefined)

//===================================24. Optoinal Chaining  ====================================================

function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;
  // const librarything = book.reviews.librarything.reviewsCount; //Cannot read properties of undefined (reading 'reviewsCount')
  const librarything = book.reviews.librarything?.reviewsCount; //NaN

  return goodread + librarything;
}

console.log(getTotalReviewCount(books[1])); // 812
console.log(getTotalReviewCount(books[2])); // NaN

*/

//===================================25. the array map method  ====================================================

const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
//each element in the array is duplicated by 2

console.log(x); // [ 2, 4, 6, 8, 10 ]

const titles = books.map((book) => book.title);

console.log(titles); // ['The Lord of the Rings', 'The Cyberiad', 'Dune', 'Harry Potter and the Philosopher\'s Stone','A Game of Thrones']

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

console.log(essentialData);
// [
//   {
//     title: "The Lord of the Rings",
//     author: "J. R. R. Tolkien",
//     reviewsCount: 13869,
//   },
//   {
//     title: "The Cyberiad",
//     author: "Stanislaw Lem",
//     reviewsCount: 812,
//   },
//   { title: "Dune", author: "Frank Herbert", reviewsCount: NaN },
//   {
//     title: "Harry Potter and the Philosopher's Stone",
//     author: "J. K. Rowling",
//     reviewsCount: 142585,
//   },
//   {
//     title: "A Game of Thrones",
//     author: "George R. R. Martin",
//     reviewsCount: 60153,
//   },
// ];

//===================================26. the array filter method  ====================================================

const longBooks = books.filter((book) => book.pages > 800);

console.log(longBooks); //
// [
//   {
//     id: 1,
//     title: 'The Lord of the Rings',
//     publicationDate: '1954-07-29',
//     author: 'J. R. R. Tolkien',
//     genres: Array(6) [
//       'fantasy', 'high-fantasy', 'adventure', 'fiction', 'novels', 'literature'
//     ],
//     hasMovieAdaptation: true,
//     pages: 1216,
//     translations: {
//       spanish: 'El señor de los anillos',
//       chinese: '魔戒',
//       french: 'Le Seigneur des anneaux'
//     },
//     reviews: {
//       goodreads: { rating: 4.52, ratingsCount: 630994, reviewsCount: 13417 },
//       librarything: { rating: 4.53, ratingsCount: 47166, reviewsCount: 452 }
//     }
//   },
//   {
//     id: 5,
//     title: 'A Game of Thrones',
//     publicationDate: '1996-08-01',
//     author: 'George R. R. Martin',
//     genres: [ 'fantasy', 'high-fantasy', 'novel', 'fantasy fiction' ],
//     hasMovieAdaptation: true,
//     pages: 835,
//     translations: {
//       korean: '왕좌의 게임',
//       polish: 'Gra o tron',
//       portuguese: 'A Guerra dos Tronos',
//       spanish: 'Juego de tronos'
//     },
//     reviews: {
//       goodreads: { rating: 4.44, ratingsCount: 2295233, reviewsCount: 59058 },
//       librarything: { rating: 4.36, ratingsCount: 38358, reviewsCount: 1095 }
//     }
//   }
// ]

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

console.log(adventureBooks); //[ 'The Lord of the Rings', 'Dune', 'Harry Potter and the Philosopher\'s Stone' ]
