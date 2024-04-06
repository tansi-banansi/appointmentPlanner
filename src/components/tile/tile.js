import React from "react";

export default function Tile({item, keys}) {
    return(
        <div className="tile">
            {keys.map((key,index) => {
                <p key={index}>{`${key}:${item}`}</p>
            })}
        </div>
    )
}

