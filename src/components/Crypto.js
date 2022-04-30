import React, { useState, useEffect } from 'react'
import axios from 'axios'    

const Crypto = () => {
// 1- seteo los hook
const [search, setSearch] = useState("");
const [cryptos, setCryptos] = useState([]);
// 2- funcion para traer los datos
const endPoint = "https://api.coingecko.com/api/v3/coins"

const showData = ()=>{
    axios.get(endPoint).then((res)=>{
        //console.log(res.data)
        setCryptos(res.data)
    })   
}

useEffect( ()=>{
    showData()
},[])

// 3- funcion de busqueda
const searcher = (e)=>{
    setSearch(e.target.value)
}

//4- filtrar los datos
const results = !search ? cryptos : cryptos.filter((val)=> val.name.toLowerCase().includes(search.toLocaleLowerCase()))



//5- renderizamos 
    return (
    <>
        <input value={search} onChange={searcher} type="text" placeholder='Buscar...' className='form-control'  />

        <table className='table table-dark table-hover mt-3'>
            <thead>
                <tr>
                    <th>Ranking</th>
                    <th>Nombre</th>
                    <th>Abreviacion</th>
                    <th>Precio</th>
                    <th>Precio 24hs</th>
                </tr>
            </thead>
            <tbody>
                {
                    results.map( (result)=>(
                        <tr key={result.id}>
                            <td>{result.market_data.market_cap_rank}</td>
                            <td><small><img src={result.image.small}/>{result.name}</small></td>
                            <td>{result.symbol.toUpperCase()}</td>
                            <td>{result.market_data.current_price.bmd.toFixed(6)}</td>                            
                            <td>
                                {result.market_data.price_change_percentage_24h < 0 ? (
                                   <span className='bage bg-danger'>{result.market_data.price_change_percentage_24h}</span> 
                                ):(
                                    <span className='bage bg-success'>{result.market_data.price_change_percentage_24h}</span>
                                )
                                }
                            </td>
                        </tr>                    
                    ))}
            </tbody>


        </table>

    </>
  )
}

export default Crypto