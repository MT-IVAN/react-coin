
import React from 'react';
//Sirva para no repetir muchas veces un instruci`no de FETCH


/**
 * fetch errror helper
 * @param {object} response 
 */
export const handleResponse = (response) =>{
    return response.json().then(json => {//response.json convierte la respues a json
        return response.ok ? json : Promise.reject(json);// json es un parametro que puede tener X name
      });

}
/**
 * 
 * @param {string} percent 
 */
export const mostrarCambioDePorcentaje = (percent) => { //Custom method! puede llamarse como queramos
  if(percent>0) return <span className="percent-raised">{percent}% &uarr;</span>
  else if(percent<0) return <span className="percent-fallen">{percent}% &darr;</span>
  else return <span>{percent}</span>
}