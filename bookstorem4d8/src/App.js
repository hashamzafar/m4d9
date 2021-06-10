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
   
      <Route path= "/" render= {()=>(<Navbar/>)} />
      <Route path= "/" render= {()=>(<Search/>)} />
      <Route path= "/" render= {()=>(<WarningSign title="exercise 1"/>)} />
      <Route path= "/"exact render= {()=>(<Navbar/>)} />
     <MyBadge color='success'/>
      <Route path="/Rigistration" exact render={() => (<Registration/>)}/>
      <Route path="/SingleBook" exact render={() => (<SingleBook img = {books[0].img} title ={books[0].title}/>)}/>
      <Route path="/BookList" exact render={() => (<BookList books={books}/>)}/>
     
   
    </Router>
  );
}

export default App;
