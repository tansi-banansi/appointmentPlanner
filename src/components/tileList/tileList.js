import React from "react";
import Tile from "../tile/tile";

export default function  TileList ({data, keys}){
    console.log(data)
    return(
        <div className="tileList">
            
            {data.map((item,index) => {
                <Tile key={index} item={item} keys={keys}/>
            })}
            
        </div>
        
    )

}