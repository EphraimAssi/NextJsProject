import React from 'react'
import CurrentCard from '../components/currentCard'
import styles from '../styles/weekly.module.css'

export async function getStaticProps() {
    const res = await fetch("https://" + process.env.API_URL_WEEKLY + "q=Ottawa,ca&cnt=5&appid=" + process.env.API_KEY)
    const posts = await res.json()  
    return {
        props: {
            posts,
        },
    }
  }

const weeklyCards = (posts) =>{
 return posts.list.map((post,i) => {
    const currentWeather = Math.round(post.main.temp - 273.15);
    const feels_like = Math.round(post.main.feels_like - 273.15);
    const humidity = Math.round(post.main.humidity);
    const wind_speed = Math.round(post.wind.speed * 3.6);
    const description = post.weather[0].description;
    const image = post.weather[0].icon;
    const date = post.dt;
    const weatherType = post.weather[0].id;

    return <CurrentCard key={i} 
    current={currentWeather} 
    feels_like={feels_like} 
    humidity={humidity} 
    wind_speed={wind_speed} 
    description={description} 
    image={image} 
    date={date} 
    weatherType={weatherType}/>
 });
 

}

const weekly = ({posts}) => {

    return (
        <div className={styles.container}>
            {weeklyCards(posts)}
        </div>
    )
}

export default weekly;