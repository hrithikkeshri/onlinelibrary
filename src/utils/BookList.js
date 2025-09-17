const BookList = localStorage.getItem("bookList")?JSON.parse(localStorage.getItem("bookList")):[
    {
      id: 1,
      title: "The Catcher in the Rye",
      description: "A story about adolescent Holden Caulfield's disillusionment with the adult world.",
      imageUrl: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
      author: "J.D. Salinger",
      rating: 4.0,
      category: "Novels"
    },
    {
      id: 2,
      title: "Into the Wild",
      description: "The true story of Christopher McCandless's journey into the Alaskan wilderness.",
      imageUrl: "https://covers.openlibrary.org/b/id/240726-L.jpg",
      author: "Jon Krakauer",
      rating: 4.1,
      category: "Travel"
    },
    {
      id: 3,
      title: "The Life-Changing Magic of Tidying Up",
      description: "Marie Kondo's guide to decluttering and organizing your home.",
      imageUrl: "https://covers.openlibrary.org/b/id/8231996-L.jpg",
      author: "Marie Kondo",
      rating: 3.8,
      category: "Life Style"
    },
    {
      id: 4,
      title: "The Design of Everyday Things",
      description: "An exploration of the psychology behind good design.",
      imageUrl: "https://covers.openlibrary.org/b/id/8099256-L.jpg",
      author: "Don Norman",
      rating: 4.2,
      category: "Design et Art"
    },
    {
      id: 5,
      title: "On the Road",
      description: "A defining work of the postwar Beat and Counterculture generations.",
      imageUrl: "https://covers.openlibrary.org/b/id/8225631-L.jpg",
      author: "Jack Kerouac",
      rating: 3.6,
      category: "Travel"
    },
    {
      id: 6,
      title: "The Great Gatsby",
      description: "A classic novel of the Jazz Age, exploring themes of decadence and excess.",
      imageUrl: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
      author: "F. Scott Fitzgerald",
      rating: 3.9,
      category: "Novels"
    },
    {
      id: 7,
      title: "Eat, Pray, Love",
      description: "A woman's journey through Italy, India, and Indonesia in search of self-discovery.",
      imageUrl: "https://covers.openlibrary.org/b/id/8231997-L.jpg",
      author: "Elizabeth Gilbert",
      rating: 3.6,
      category: "Life Style"
    },
    {
      id: 8,
      title: "Steal Like an Artist",
      description: "A guide to embracing creativity by borrowing from others.",
      imageUrl: "https://covers.openlibrary.org/b/id/8231998-L.jpg",
      author: "Austin Kleon",
      rating: 4.0,
      category: "Design et Art"
    },
    {
      id: 9,
      title: "Wild: From Lost to Found on the Pacific Crest Trail",
      description: "A memoir of a woman's solo hike along the Pacific Crest Trail.",
      imageUrl: "https://covers.openlibrary.org/b/id/8231999-L.jpg",
      author: "Cheryl Strayed",
      rating: 4.0,
      category: "Travel"
    },
    {
      id: 10,
      title: "To Kill a Mockingbird",
      description: "A novel about racial injustice in the Deep South.",
      imageUrl: "https://covers.openlibrary.org/b/id/8226192-L.jpg",
      author: "Harper Lee",
      rating: 4.3,
      category: "Novels"
    },
    {
      id: 11,
      title: "The Art of Happiness",
      description: "A spiritual leader's guide to achieving happiness.",
      imageUrl: "https://covers.openlibrary.org/b/id/8232000-L.jpg",
      author: "Dalai Lama XIV",
      rating: 4.1,
      category: "Life Style"
    },
    {
      id: 12,
      title: "Thinking with Type",
      description: "A guide to typography for designers.",
      imageUrl: "https://covers.openlibrary.org/b/id/8232001-L.jpg",
      author: "Ellen Lupton",
      rating: 4.2,
      category: "Design et Art"
    },
    {
      id: 13,
      title: "The Alchemist",
      description: "A fable about following your dreams.",
      imageUrl: "https://covers.openlibrary.org/b/id/8226193-L.jpg",
      author: "Paulo Coelho",
      rating: 3.9,
      category: "Novels"
    },
    {
      id: 14,
      title: "Vagabonding",
      description: "An uncommon guide to long-term travel.",
      imageUrl: "https://covers.openlibrary.org/b/id/8232002-L.jpg",
      author: "Rolf Potts",
      rating: 4.0,
      category: "Travel"
    },
    {
      id: 15,
      title: "The Joy of Less",
      description: "A minimalist guide to decluttering.",
      imageUrl: "https://covers.openlibrary.org/b/id/8232003-L.jpg",
      author: "Francine Jay",
      rating: 3.8,
      category: "Life Style"
    },
    {
      id: 16,
      title: "Logo Design Love",
      description: "A guide to creating iconic brand identities.",
      imageUrl: "https://covers.openlibrary.org/b/id/8232004-L.jpg",
      author: "David Airey",
      rating: 4.1,
      category: "Design et Art"
    },
    {
      id: 17,
      title: "Pride and Prejudice",
      description: "A classic novel about manners and matrimonial machinations.",
      imageUrl: "https://covers.openlibrary.org/b/id/8226194-L.jpg",
      author: "Jane Austen",
      rating: 4.3,
      category: "Novels"
    },
    {
      id: 18,
      title: "The Art of Travel",
      description: "A philosophical look at the pleasures and pitfalls of travel.",
      imageUrl: "https://covers.openlibrary.org/b/id/8232005-L.jpg",
      author: "Alain de Botton",
      rating: 3.8,
      category: "Travel"
    },
    {
      id: 19,
      title: "The Happiness Project",
      description: "A year-long experiment in increasing happiness.",
      imageUrl: "https://covers.openlibrary.org/b/id/8232006-L.jpg",
      author: "Gretchen Rubin",
      rating: 3.6,
      category: "Life Style"
    },
    {
      id: 20,
      title: "Design as Art",
      description: "A collection of essays on design and its role in society.",
      imageUrl: "https://covers.openlibrary.org/b/id/8232007-L.jpg",
      author: "Bruno Munari",
      rating: 4.1,
      category: "Design et Art"
    }
  ];
  
  export default BookList;
  