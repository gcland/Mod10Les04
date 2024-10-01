// Mod10Les04

// 1. Exploring JavaScript Objects

// Task 1

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.displayInfo = function () {console.log("Book title: "+this.title+"\nAuthor: "+this.author+"\nPages: "+this.pages)} // Task 2 alternative
}

// Task 2

let bookOne = new Book("One", "Grant Copeland", 120)
let bookTwo = new Book("Two", "Greg Copeland", 240)
let bookThree = new Book ("Three", "Grace Copeland", 92)

// bookOne.displayInfo = function () {
//     console.log("Book title: "+this.title+"\nAuthor: "+this.author+"\nPages: "+this.pages)
// }
console.log("---Task 2---")
bookOne.displayInfo()
console.log()
bookTwo.displayInfo()
console.log()
bookThree.displayInfo()

// Task 3
console.log("---Task 3---")

let booksArray = [bookOne, bookTwo, bookThree]
let bookFour = new Book ("Four", "Gracus Copeland", 9)

function addBook (book) {
    booksArray.push(book)
    console.log(booksArray)
}
addBook(bookFour)

function searchTitle (title) {
    for (book in booksArray) {
        if (title == booksArray[book]["title"])
            console.log("Book title: "+booksArray[book]["title"]+"\nAuthor: "+booksArray[book]["author"]+"\nPages: "+booksArray[book]["pages"])
    }
    
}

searchTitle("Four") // Note: input into function is case-sensitive. Ex: 'four' will not return return book titled, "Four".

function searchAuthor (author) {
    for (book in booksArray) {
        if (author == booksArray[book]["author"])
            console.log("Book title: "+booksArray[book]["title"]+"\nAuthor: "+booksArray[book]["author"]+"\nPages: "+booksArray[book]["pages"])
    }
    
}

searchAuthor("Gracus Copeland") // Note: input into function is case-sensitive. Ex: 'grace Copeland' will not return return book with author, "Grace Copeland".

// Task 4
console.log("---Task 4---")

function filterPages (pages) {
    console.log("Books with less than "+pages+" pages:")
    for (book in booksArray) {
        if (pages > (booksArray[book]["pages"]))
            console.log("Book title: "+booksArray[book]["title"]+"\nAuthor: "+booksArray[book]["author"]+"\nPages: "+booksArray[book]["pages"])
}
}

filterPages(100)

let booksArrayAuthor = booksArray.map(item => {
    return "Author: "+item["author"]})

console.log(booksArrayAuthor)


// 2. Exploring Objects and Math in JavaScript
console.log("---Item 2---")
console.log()

// Task 1

function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber
    this.balance = balance
    this.owner = owner
}

let account1 = new Account(1, 5000, "A")

// Task 2
console.log("---Task 2---")

Account.prototype.deposit = function(amount) { 
    if (amount < 0) {
        console.log("Deposit amount cannot be less than $0.")
    } else {
        this.balance = amount+this.balance
        console.log("Deposited: $"+amount)
        console.log('New balance: $'+this.balance)
    }
}

account1.deposit(1000)

Account.prototype.withdrawl = function(amount) { 
    if (amount < 0) {
        console.log("Withdrawl amount cannot be less than $0.")
    } else if (amount > this.balance) {
        console.log("Withdrawl amount exceeds balance: "+this.balance)
    } else {
        this.balance = this.balance - amount
       console.log("Withdrawn: $"+amount)
       console.log('New balance: $'+this.balance)
    }
}

account1.withdrawl(1000)
console.log()

// Task 3
console.log("---Task 3---")

Account.prototype.compound = function(rate, years) { // function requires input of interest rate % (x% format not .0x% format) and years (assume compounded annually)
    let step1 = (rate/100)
    let step2 = (1 + step1)
    let step3 = Math.pow(step2, years)
    this.balance = (this.balance*step3)
    console.log("Balance after compounding interest rate of: "+rate+"% over "+years+" years: ")
    console.log(this.balance)
}

account1.compound(2, 5) // function requires input of interest rate % (x% format not .0x% format) and years (assume compounded annually)
