import React from 'react'

export default function Menu({items}) {
 
    return (
        <div className='section-center'>  
           
           {items.map((menuItem)=>{
            const {id, title, img, desc, price, category} = menuItem;    
              return <article key={id} className="menu-item">
                  <img className="photo" src={img}  alt={title}/>
                   
                    <div className='item-info'>
                      <header>   
                        <h4 className="title">{title} </h4>
                        <h4 className="price">  &#8377;  {price}</h4>
                 
                        </header>
                        <h4 className="category"> {category}</h4>
                        <p className='item-text'>{desc}</p> 
                    </div>
           </article>
           })}
        </div>
    )
}
