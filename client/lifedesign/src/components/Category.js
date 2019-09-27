import React, {useState, useEffect} from 'react'
import {withAuth} from '../utils/auth.js'
import axios from 'axios'
import Display from './categorydisplay.js'

const Categories = () => {
    const [category, setCategory] = useState([])


useEffect(() => {
    withAuth()
    .get('https://build-your-life.herokuapp.com/api/categories')
    .then(res => {
        setCategory(res.data)
        console.log(res)
        
    })
    .catch(error => {
        console.log('error', error)
    })
},[])
return (
    <div>
        {category.map(cat => {
            return <div>
                <Display category={cat.name}/>
            </div>
        })}
        <Display/>
    </div>
)
}

export default Categories
