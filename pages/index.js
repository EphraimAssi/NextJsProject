import Head from 'next/head'
import CurrentCard from '../components/currentCard'
import Layout, { siteTitle } from '../components/layout'

export async function getStaticProps() {
  const res = await fetch("https://" + process.env.API_URL + "q=Ottawa,ca&appid=" + process.env.API_KEY)
  const posts = await res.json()
  console.log(posts)

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
  const date = posts.dt;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <CurrentCard current={currentWeather} feels_like={feels_like} humidity={humidity} wind_speed={wind_speed} description={description} image={image} date={date}/>
    </>
  )
}