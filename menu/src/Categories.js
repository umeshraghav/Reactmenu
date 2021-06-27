import React from 'react'




export default function Categories({category,filterItems}) {
    
  
    return (
        
        <div className="btn-container">
            {category.map((cate, index)=>{
                return <button
                    className="btn"
                    key={index}
                    onClick={()=> filterItems(cate)}
                    >
                        {cate}
                </button>
            })}


             
               
        </div>
    )
}
