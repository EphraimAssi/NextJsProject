import Card from 'react-bootstrap/Card'

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


export default function CurrentCard({ current, feels_like, humidity, wind_speed, image, description, date }) {
    const imageLink = "/images/icons/"+image+".png"
    return (
        <Card style={{ width: '18rem' }} className="dailyCard">
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