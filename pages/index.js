import Head from 'next/head'
import CurrentCard from '../components/currentCard'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/home.module.css'

export async function getStaticProps() {
  const res = await fetch("https://" + process.env.API_URL + "q=Ottawa,ca&appid=" + process.env.API_KEY)
  const posts = await res.json()
  return {
      props: {
          posts,
      },
  }
}

export default function Home({ posts }) {
  const currentWeather = Math.round(posts.main.temp - 273.15);
  const feels_like = Math.round(posts.main.feels_like - 273.15);
  const humidity = Math.round(posts.main.humidity);
  const wind_speed = Math.round(posts.wind.speed * 3.6);
  const description = posts.weather[0].description;
  const image = posts.weather[0].icon;
  const weatherType = posts.weather[0].id;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.container}>
        <h1>Next.js DTS Weather App</h1>
        <h4 className={styles.white}>Hi! We are two young developers working for ESDC using React and Next.js. This application is purely to practice our Next.js skills.</h4>
<hr />
        <h3 className={styles.white}>Today's Weather in Ottawa</h3>
        <CurrentCard 
        current={currentWeather} 
        feels_like={feels_like} 
        humidity={humidity} 
        wind_speed={wind_speed} 
        description={description} 
        image={image} 
        weatherType={weatherType}
        date={null}/>           
      </div>
      <br />
      <br />
    </>
  )
}