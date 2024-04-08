import React from "react";
import Tile from "../tile/tile";
import styles from './tileList.module.css'

export default function  TileList ({data, keys}){
    return(
        <div className={styles.TileList}>            
            {data.map((item,index) => {
    
            return <Tile key={index} item={item} keys={keys}/> 
            
            })}
            
        </div>
        
    )

}
