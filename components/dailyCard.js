import Card from 'react-bootstrap/Card'

export default function DailyCard({ weather, description }) {
    return (
        <Card style={{ width: '18rem' }} className="dailyCard">
            <Card.Header>Monday</Card.Header>
            <Card.Img variant="top" src="/images/icons/sun.png" />
            <Card.Body>
                <Card.Title>{weather}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}