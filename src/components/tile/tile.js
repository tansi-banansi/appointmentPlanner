import React from "react";

export default function Tile({item, keys}) {
    return(
        <div className="tile">
            {keys.map((key, index) => {
                return <p key={index}>{`${key}: ${item[key]}`}</p>
            })}
        </div>
    )
}

