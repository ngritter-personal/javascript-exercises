const getTheTitles = function(array) {
    let books = [];
    
    for (let book in array) {
        books.push((array[book].title));
    }

    return(books);
};


const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

getTheTitles(books);


// Do not edit below this line
module.exports = getTheTitles;
