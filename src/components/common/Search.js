import React from 'react';
import {API_URL} from '../../config';
import {handleResponse} from '../../helpers';
import { withRouter} from 'react-router-dom';
import './Search.css';
import Loading from './Loading';

 class Search extends React.Component {
    constructor(){
        super();

        this.state = {
            searchResults : [],
            searchQuery: '',
            loading:false,
        };

        this.cambios = this.cambios.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
        
    }

    
    cambios(event){
        const inputValue = event.target.value;
        

        this.setState({ searchQuery : inputValue});

        //si esta vacion no se hace una peticion
        if(!inputValue) return '';

        this.setState({loading:true});
        fetch(`${API_URL}/autocomplete?searchQuery=${inputValue}`)
        .then(handleResponse).then((results)=>{
            this.setState({
                loading:false,
                searchResults:results
            });
        });

    }

    renderSearchResults(){
        const { searchResults , searchQuery, loading} = this.state;
        if(!searchQuery){
            return'';
        }

        if(searchResults.length > 0){
            return(
                <div className="Search-result-container">
                    {searchResults.map(result=>(
                        <div onClick={() => this.handleRedirect(result.id)} key={result.id} className="Search-result">
                            {result.name} ({result.symbol})
                        </div>       
                    ))}
                </div>
            );
        }
        if(!loading){
            return(
                
                <div className="Search-result-container">
                    <div className="Search-no-result">
                        No results found.
                    </div>
                </div>
            );
        }

    }
    //limpiar los inputs y cerrar el conteneder que autocompleta
    handleRedirect(currencyId){
        this.setState({
            searchQuery:'',
            searchResults:[],
        });

        this.props.history.push(`/currency/${currencyId}`);
    }

        
    render(){
        const { loading , searchQuery}= this.state;
        return(
            <div className="Search">
                <span className="Search-icon"/>

                <input  
                className="Search-input"
                type="text"
                placeholder="Currency name"
                onChange={this.cambios}
                value={searchQuery} />
                

                {/* condicional que significa si loading */}
                {loading &&
                <div className="Search-loading">
                    <Loading
                    width = '12px'
                    height = '12px'
                    
                    />
                </div>}
                {this.renderSearchResults()}    
            </div>
        );
    }
}

export default withRouter(Search);