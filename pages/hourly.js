import HourlyCard from '../components/hourlyCard'
import styles from '../styles/hour.module.css'
import Carousel from 'react-bootstrap/Carousel'

export async function getStaticProps() {
    const res = await fetch("https://" + process.env.API_URL_WEEKLY + "q=Ottawa,ca&appid=" + process.env.API_KEY)
    const posts = await res.json()
    console.log(posts)
    return {
        props: {
            posts,
        },
    }
}

export default function ThreeHours({ posts }) {

    return (
        <>
            <div className={styles.container}>
                <Carousel fade>
                    {posts.list.map((item, key) => {
                        const currentWeather = Math.round(item.main.temp - 273.15);
                        const feels_like = Math.round(item.main.feels_like - 273.15);
                        const humidity = Math.round(item.main.humidity);
                        const wind_speed = Math.round(item.wind.speed * 3.6);
                        const description = item.weather[0].description;
                        const image = item.weather[0].icon;
                        const date = item.dt_txt;
                        const weatherType = item.weather[0].id;

                        return (
                            <Carousel.Item>
                                <HourlyCard
                                    current={currentWeather}
                                    feels_like={feels_like}
                                    humidity={humidity}
                                    wind_speed={wind_speed}
                                    description={description}
                                    image={image}
                                    date={date}
                                    weatherType={weatherType}
                                    dateTime={date} />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        </>
    )
}