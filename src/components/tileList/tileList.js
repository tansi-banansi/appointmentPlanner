import React from "react";
import Tile from "../tile/tile";

export default function  TileList ({data, keys}){
    return(
        <div className="tileList">            
            {data.map((item,index) => {
    
            return <Tile key={index} item={item} keys={keys}/> 
            
            })}
            
        </div>
        
    )

}
