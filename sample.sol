pragma solidity 0.8.6;
contract structure{
struct Book{
string title;
string author;
uint bookID;
uint price;
}
// define a struct- name of the struct variable to represent the struct
Book book;
function setBook() public {
book= Book("Blokchain for beginners","Ineuron",4,1000);
}
function getBookId() public view returns(uint){
return book.bookID;
}

function getTitle(string storage title) public view returns(string storage){
return book.title;
}
function getPrice() public view returns(uint){
return book.price;
}
function getAuthor(string storage author) public view returns(string author){
return book.author;
}



making author,title -- memory variables but of type view            gas cost -  428151  transaction cost - 372305 
making author,title -- memory variables but of type pure            gas cost -  428151  transaction cost - 372305 
making author,title -- calldata variables but of type view           gas cost - 364738  transaction cost - 317163
making author,title -- calldata variables but of type pure           gas cost - 364738  transaction cost - 317163