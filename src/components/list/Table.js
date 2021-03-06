import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Table.css';
import { mostrarCambioDePorcentaje } from '../../helpers';

const Table = (props) =>{
                                                            //El prop history es dado cuando se exporta withRouter(Table)
    const { currenciesParaTable , history } = props;
    return (
        <div className="Table-container">
               
                <table className="Table">
                    <thead className="Table-head">
                        <tr>
                            <th>cryptocurrencies</th>
                            <th>Price</th>
                            <th>Market Cap</th>
                            <th>24H change</th>
                        </tr>
                    </thead>
                    <tbody className="Table-body">
                        {currenciesParaTable.map((currency)=>(

                            // <tr key={currency.id}>el key ayuda a identificar a react que se modifica 
                            <tr 
                                key={currency.id}
                                onClick={() => history.push(`/currency/${currency.id}`)}
                            >
                                <td>
                                    <span className="Table-rank" >{currency.rank}</span>
                                    {currency.name}
                                </td>
                                <td>
                                    <span className="Table-dollar" >$ </span>
                                    {currency.price}
                                </td>
                                <td>
                                    <span className="Table-dollar" >$ </span>
                                    {currency.marketCap}
                                </td>
                                <td>
                                    {mostrarCambioDePorcentaje(currency.percentChange24h)}
                                </td>
                            </tr>
                            
                        
                        ))} 
                    </tbody>


                
                </table>    
            </div>
    ); 
}

Table.propTypes = {
    currenciesParaTable : PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
}

export default withRouter(Table);