export default function dailyCard({ weather, description }) {
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{weather}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
        </Card.Body>
    </Card>
}