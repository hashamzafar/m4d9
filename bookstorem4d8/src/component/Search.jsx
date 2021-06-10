

import {Form,FormControl,Button} from 'react-bootstrap'
import { Component } from 'react'
import SingleBook from './SingleBook'
import books from '../data/books.json'


class  Search extends Component {
    state ={
        query:'',
        filterBooks: [],

    }
    render(){
         return(
             <>
         <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search" 
          onChange={(e) =>{
            this.setState({query:e.target.value}, ()=> {
                this.setState({filterBooks:books.filter((book)=> book.title.includes(this.state.query ))

            })
            })
          }} 
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      {this.state.filterBooks && this.state.filterBooks.map((book)=> <SingleBook img={book.img} title={book.title}/>)}
</>
    
    )}
    }
   

  
     
export default Search