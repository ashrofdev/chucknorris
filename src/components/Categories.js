import React, { useEffect, useState } from 'react';
import { getCategories } from '../ApiCalls';

const Categories = ({setCategory}) => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories().then(e=>{
            console.log(e.data,'llll')
            setCategories(e.data)
        })
        console.log(getCategories())
        
      },[])
    
    return (
        <div className="grid categories">
            <div className="grid-content items">
                {
                    categories.map(category=> <div onClick={()=> setCategory(category)} className="category">
                                                    {category}
                                                </div>)
                }
            </div>
        </div>
    );
};

export default Categories;