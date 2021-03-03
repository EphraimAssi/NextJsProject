import Card from 'react-bootstrap/Card'
import styles from '../styles/currentCard.module.css'

const day = (date) => {
  switch (new Date(date).getDay()) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "Unknown";
    }
}

const checkWeatherType = (weatherType) =>{
  if(weatherType === 800){
    return styles.clear;
  }
  let digit = weatherType.toString()[0];
  switch (digit) {
    case '2':
      return styles.thunderstorm;
    case '3':
      return styles.drizzle;
    case '5':
      return styles.rain;
    case '6':
      return styles.snow;
    case '7':
      return styles.atmosphere;
    case '8':
      return styles.clouds;
    default:
      return null;
  }
}

export default function CurrentCard({ current, feels_like, humidity, wind_speed, image, description, date, weatherType }) {
    const imageLink = "/images/icons/"+image+".png"
    
    return (
        <Card style={{ width: '18rem' }} className={`${styles.dailyCard} ${checkWeatherType(weatherType)}`}>
            <Card.Header>
                <div>
                    {day(date)}: {current}°C
                </div>
                <div>
                    {description}
                </div>
            </Card.Header>
            <Card.Img variant="top" src={imageLink} />
            <Card.Body>
                <Card.Title>Feels like: {feels_like}°C</Card.Title>
                <Card.Text>
                    Wind speed: {wind_speed} km/h
                </Card.Text>
                <Card.Text>
                    Humidity: {humidity} %
                </Card.Text>
            </Card.Body>
        </Card>
    )
}