import React from "react";
import styles from './tile.module.css'


export default function Tile({item, keys}) {
    return(
        <div className={styles.Title}>
            {keys.map((key, index) => {
                return <p key={index}>
                            <span className={styles.Key}>{`${key}:`}</span> <span className={styles.Item}>{item[key]}</span>
                    </p>
            })}
        </div>
    )
}

