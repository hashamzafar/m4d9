import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import WarningSign from './component/WarningSign'
import MyBadge from './component/MyBadge';
import SingleBook from './component/SingleBook';
import books from './data/books.json'
import BookList from './component/BookList';
import Search from './component/Search';
import Navbar from './component/Navbar'
import Registration from './component/Registration';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
   
      <Route path= "/" render= {(routerProps)=><Navbar {...routerProps}/>} />
      <Route path= "/" render= {(routerProps)=><Search {...routerProps}/>} />
      <Route path= "/" render= {(routerProps)=><WarningSign {...routerProps}title="exercise 1"/>} />
      <Route path= "/" render= {(routerProps)=> <MyBadge {...routerProps} color='success'/>} />
     
      <Route path="/Rigistration" exact render={(routerProps) => <Registration  {...routerProps}/>}/>
      <Route path="/SingleBook" exact render={(routerProps) => <SingleBook {...routerProps} img = {books[0].img} title ={books[0].title}/>}/>
      <Route path="/BookList" exact render={(routerProps) => <BookList {...routerProps} books={books}/>}/>
     
   
    </Router>
  );
}

export default App;
