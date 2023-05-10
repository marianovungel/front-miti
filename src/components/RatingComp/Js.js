import React from 'react'
import './style.css'
import api from '../../api'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Js() {
    const [data, setData] = useState([])

    const ordena = (response)=>{
        response.sort(function(a, b){
            if(a.pontoJS > b.pontoJS){
                return -1;
            }else{
                return true;
            }
        })

        setData(response)
    }

    useEffect(()=>{
        const getRating = async()=>{
            try {
                const res = await api.get("/user")
                ordena(res.data)
            } catch (error) {
                alert(error)
            }
        }
        getRating()
    }, [])

  return (
    <div className='contentCcomp'>
      <div className='table'>
        <div className='headerTable'>
            <h4 className='htable'>Nome do Usuário</h4>
            <h4 className='htable'>Ranking</h4>
        </div>
            {data.map((db)=>(
                <div className='bodyTable' key={db._id}>
                    <div className='ptable'>
                        <p className='ptableName'>{db.nome}</p>
                    </div>
                    <p className='ptable2'>{db.pontoJS}</p>
                </div>
            ))}
      </div>
    </div>
  )
}
