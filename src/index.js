import React, {Component} from 'react'
import {render} from 'react-dom'

let bookList = [
    {"title": "Scotland's Jesus", "author": "Frankie Boyle", "pages": 222},
    {"title": "The ragged trousered philanthropists", "author": "Robert Tressel", "pages": 639},
    {"title": "Animal farm", "author": "George Orwell", "pages": 117}
]

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>By: {author}</p>
            <p>Number of pages: {pages}</p>
        </section>
    )
}

class Library extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: true
        }
    }
    render() {
        console.log(this.state)
        const {books} = this.props
        return (
            <div>
                <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
                {books.map (
                    (book, i) => 
                    <Book
                        key={i} 
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages} 
                    />
                )}
            </div>
        )
    }
}


/* <Book title="Scotland's Jesus" author="Frankie Boyle" pages={222}/>
<Book title="The ragged trousered philanthropists" author="Robert Tressel" pages={639}/>
<Book title="Animal Farm" author="George Orwell" pages={117}/> */


render(
    <Library books={bookList}/>,
    document.getElementById('root')
)