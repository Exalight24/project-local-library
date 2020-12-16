function findAuthorById(authors, id) {
  return authors.find((author)=>author.id === id )
}

function findBookById(books, id) {
  return books.find((book)=>book.id === id )
}

function partitionBooksByBorrowedStatus(books) {
  let falseArray = books.filter(book=>{
   return book.borrows[0].returned==false
  });
  let trueArray = books.filter(book=>{
    return book.borrows[0].returned==true
  });
  return [falseArray, trueArray];
}

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  accounts.forEach(account=>{
    book.borrows.forEach(transaction=>{
      if(transaction.id === account.id){
        let accountObj = {...account};
        accountObj.returned=transaction.returned;
        borrowers.push(accountObj)
      }
    })
  })
return borrowers.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
