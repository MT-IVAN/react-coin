import React from 'react';
import {handleResponse} from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import Table from './Table'
import Pagination from './Pagination';

class List extends React.Component{
    constructor(){
        super(); //se debe poner para inicializar.
        
        this.state = {
            loading: false,
            currencies: [],
            error:null,
            totalPages: 0,
            page: 1,
        };
        this.paginationClick = this.paginationClick.bind(this);

    }
    //se lees esto, tienes que venir al grado si o si jajajaj
    componentDidMount(){
        this.fetchCurrencies();
    }


    fetchCurrencies(){
        this.setState({ loading:true });

        const {page } = this.state;

        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=10`)
        .then(handleResponse)
        .then((data) => {
            const { currencies , totalPages } = data;
            this.setState({
                currencies, //esi gual a currencies = data.currencies sin el const de arriba
                totalPages,
                loading:false
            });
        })
        .catch((error) => {
            this.setState({
                error: error.errorMessage, 
                loading:false
            });
        });
    }


    

    paginationClick(direction){
        //por defecto no se puede usar this. hay que agregarlo en el constructor
        let nextPage = this.state.page;
        nextPage = direction === 'next' ? nextPage +1: nextPage-1;
        //hay que hacer un calback en setState porque todo es asincrono, cuando se esta actializacion #page# fetch ya se ha ejecutado
        this.setState({page:nextPage}, ()=>{
            this.fetchCurrencies();
        });
        
    }

    render() { //es un metodo!
        const {loading, error, currencies,page, totalPages } = this.state;
        // const loading = this.state.loading;          |
        // const error = this.state.error;              | esto es lo mismo que lo de arriba
        // const currencies = this.state.currencies;    |


        
        if(loading){
            return <div className="loading-container"><Loading/></div>
        }
        if(error){
            return <div className="error">{error}</div>
        }
        return (
            <div>
            <Table 
            currenciesParaTable={currencies}
            //mando currenciesParaTable a Table
           /> 
            <Pagination
                page={page}
                totalPages = {totalPages}
                paginationClick = {this.paginationClick}
            />
            </div>
        );
    }
}

export default List;