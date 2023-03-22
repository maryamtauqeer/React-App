import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css"

function BasicCardExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg"  width={100} height={250}/>
      <Card.Body>
        <Card.Title>Komorebi:  sunlight filtering through the leaves of trees</Card.Title>
        <Card.Text>
        Sunbeams through leaves sway,
        Nature's stained glass on display,
        Komorebi, play.
        </Card.Text>
        <Button className='v1'>Proceed</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCardExample;