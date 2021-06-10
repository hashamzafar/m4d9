
import { Row } from 'react-bootstrap'

import SingleBook from './SingleBook'



const BookList = ({books})=> {
    return (
        <>
        <Row>
      {books.map((book) => {
         return(
            <>
             <SingleBook  img= {book.img} title = {book.title} key={book.asin}/>
             

             </>
             )
             
            } 
       
    )}
            </Row>
            </>
    )
}
export default BookList
