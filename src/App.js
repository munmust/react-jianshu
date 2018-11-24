import React, { Component } from 'react';
import Header from './common/header/index';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import HOME from './page/home';
import Detail from './page/detail/loadable';
import Login from './page/login';
class App extends Component {
  render() {
    return (
        <Provider store={store}>

            <BrowserRouter>
                <div>
                    <Header/>
                <Route path='/' exact component={HOME} ></Route>
                    <Route path='/login' exact component={Login} ></Route>
                <Route path='/detail/:id' component={Detail}></Route>
                </div>
            </BrowserRouter>
        </Provider>

    );
  }
}

export default App;
