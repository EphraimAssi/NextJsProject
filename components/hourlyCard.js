import Card from 'react-bootstrap/Card'
import styles from '../styles/hour.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import moment from 'moment'

const checkWeatherType = (weatherType) => {
  if (weatherType === 800) {
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

const date = (date) => {
  date = new Date(date)
  var date2 = new Date(date)
  date2.setHours(date2.getHours()+3)
  return [moment(date).format('dddd, MMMM Do YYYY, h a'), moment(date2).format('h a')];
}

export default function HourlyCard({ current, feels_like, humidity, wind_speed, image, description, dateTime, weatherType, temp_max, temp_min, pressure, visibility }) {
  const imageLink = "/images/icons/" + image + ".png"

  return (
    <Card style={{ width: '100%' }} className={`${styles.hourCard} ${checkWeatherType(weatherType)}`}>
      <Card.Header className="hourCardHeader">
        <div>
          {date(dateTime)[0]} - {date(dateTime)[1]}
        </div>
        <div>
          {description}
        </div>
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col><Card.Img src={imageLink} /></Col>
            <Col>
              <Card.Title>{current}°C</Card.Title>
              <Row><Col>Feels like: {feels_like}°C</Col></Row>
              <Row className="hourContentRow">
                <Col>Temperature min: {temp_min}°C</Col>
                <Col>Temperature max: {temp_max}°C</Col>
              </Row>
              <Row className="hourContentRow">
                <Col>Humidity: {humidity} %</Col>
                <Col>Pressure: {pressure} hPa</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>Wind speed: {wind_speed} km/h</Col>
            <Col>Visibility: {visibility} m</Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}