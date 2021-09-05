import React from 'react'

export default function Card({index,setData,cals,name,data}) {
    return (
        <div>
            <div className="card1">
            <div>
                <p>{name}</p>
                <p>You have consumed {cals} calories today</p>
            </div>
            <button onClick={() => {
                const newItem = data.filter((element, i) => index !== i);
                setData(newItem);
            }}>Delete</button>
        </div>
        </div>
    )
}
