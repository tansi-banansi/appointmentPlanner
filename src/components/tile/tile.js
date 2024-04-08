import React from "react";
import styles from './tile.module.css'

export default function Tile({ item, keys, onRemove }) {
    const handleRemove = () => {
        onRemove(item);
    };

    return (
        <div className={styles.Tile}>
            <div className={styles.TileInfo}>
            {keys.map((key, index) => (
                <p key={index}>
                    <span className={styles.Key}>{`${key}:`}</span>{" "}
                    <span className={styles.Item}>{item[key]}</span>
                </p>
            ))}
            </div>
            
            <button className={styles.TileButton} onClick={handleRemove}>X</button>
        </div>
    );
}