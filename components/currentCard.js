import Card from 'react-bootstrap/Card'

export default function CurrentCard({ current, feels_like, humidity, wind_speed, image, description }) {
    const imageLink = "/images/icons/"+image+".png"

    function day () {
        switch (new Date().getDay()) {
            case 0:
              day = "Sunday";
              break;
            case 1:
              day = "Monday";
              break;
            case 2:
               day = "Tuesday";
              break;
            case 3:
              day = "Wednesday";
              break;
            case 4:
              day = "Thursday";
              break;
            case 5:
              day = "Friday";
              break;
            case 6:
              day = "Saturday";
          }

          return day;
    }

    return (
        <Card style={{ width: '18rem' }} className="dailyCard">
            <Card.Header>
                <div>
                    {day()}: {current}°C
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