import React from 'react';
import ReactDOM from 'react-dom'; //Permite renderiza
//Componentes
import Header from './components/common/Header';
import List from './components/list/List';
import Detail from './components/detail/Detail';
import NotFound from './components/notFound/NotFound';

//Style
import './index.css';
//router
import { BrowserRouter, Route, Switch} from 'react-router-dom';


const App = () =>{
    return (
        
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={List} exact /> 
                    <Route path="/currency/:id" component={Detail} exact/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
<App />,  //Este es el nombre de la constante que se va renderizar
document.getElementById('root')
);

