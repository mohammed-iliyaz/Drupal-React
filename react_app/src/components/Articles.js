 
import React from 'react'


export default function Articles(props) {
    
    console.log("sdf",props.article)

    
    return (
        <div>this is okay
                
                    {props.article.data}
               
            </div>
    )
}
