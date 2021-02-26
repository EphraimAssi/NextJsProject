import React from 'react'
import styles from '../../styles/weeklyCard.module.css'
import Image from 'next/image'

const WeeklyCard = () => {
    return (
        <div className={styles.container}>
            <h3>Image can be here.</h3>
            <div>
                <h5>20 Celsius</h5>
                <h5>68 fahrenheit</h5>
            </div>
        </div>
    )
}

export default WeeklyCard;
