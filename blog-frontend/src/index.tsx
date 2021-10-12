import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './App'
import PlayPage from './component/PlayPage/PlayPage'
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path ='/' component={HomePage}/>
      <Route exact path='/Play' component={PlayPage}/>
      </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
