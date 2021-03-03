import Card from 'react-bootstrap/Card'

export default function HourlyCard({ current, feels_like, humidity, wind_speed, image, description, dateTime, weatherType}) {
    const imageLink = "/images/icons/"+image+".png"
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>
                <div>
                    {dateTime}: {current}°C
                </div>
                <div>
                    {description}
                </div>
            </Card.Header>
            <Card.Img src={imageLink} />
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