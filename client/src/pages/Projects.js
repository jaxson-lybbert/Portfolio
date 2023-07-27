import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";

export default function Projects({ projectData }) {
  return (
    <div className="container">
      <Row>
        <Col className="justify-content-md-center" xs={6} md={4}>
          {projectData.map((res) => (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="cardTitle">{`${res.name}`}</Card.Title>
                <Card.Text className="cardText">{`${res.summary}`}</Card.Text>
                <Card.Link className="cardLink" href={res.repoLink}>
                  GitHub Repo
                </Card.Link>
                {res.deployLink ? (
                  <Card.Link className="cardLink" href={res.deployLink}>
                    Deployed Link
                  </Card.Link>
                ) : (
                  <Card.Link></Card.Link>
                )}
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
}
