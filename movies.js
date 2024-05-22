// Definire un array di oggetti; ogni oggetto rappresenta un film o serie tv, che è caratterizzato da: title, year, genre, rating, type (movie o tv), seasons (solo per serie tv).

const data = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    rating: 10,
    type: 'movie',
  },
  {
    title: 'Person of Interest',
    year: 2008,
    genre: 'Crime drama',
    rating: 9.7,
    type: 'tv',
    seasons: 5,
  },
  {
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    rating: 8.8,
    type: 'movie',
  },
  {
    title: 'Game of Thrones',
    year: 2011,
    genre: 'Fantasy',
    rating: 9.3,
    type: 'tv',
    seasons: 8,
  },
  {
    title: 'The Matrix',
    year: 1999,
    genre: 'Sci-Fi',
    rating: 8.7,
    type: 'movie',
  },
];

// Creare una classe Movie che contenga le informazioni sopra indicate.

class Movie {
  constructor(title, year, genre, rating) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.rating = rating;
  }

  toString() {
    return `${this.title} è un film di genere ${this.genre}. È stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}.`;
  }
}
