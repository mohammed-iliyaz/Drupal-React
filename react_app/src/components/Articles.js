 
import React from 'react'


export default function Articles(props) {


    
    return (
        <div>this is okay
                <ul>
                    {props.article.map(res => <li>{res.attributes.title}</li>)}
                    </ul>
            </div>
    )
}
