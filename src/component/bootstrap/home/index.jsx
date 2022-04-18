import { Card, Container, Row, Button } from "react-bootstrap";
import Icon from "./fontIcon";
import "../bootstrap.css";
const Home = () => {
  return (
    <Container id="Home" className="col-lg-12">
      <Row className="col-lg-12">
        <Card
          className="col-lg-6 col-md-6 col-sm-6 home bgc-whitesmoke border-secondary "
          style={{ borderRadius: "10px", background: "#e5e5e5" }}
        >
          <Card.Body className="fw-bold text-center mt">
            <h2 className="fw-light">Hello, im a ardhian</h2>
            <p className="fs-5 fw-light">Ini Tugas portfolio css by eduwork</p>
            <Button variant="outline-secondary" classname="mt-3">
              Github
            </Button>
          </Card.Body>
        </Card>
        <Card
          className="col-lg-3 col-md-6 col-sm-3 border-0 mt-3"
          style={{ background: "#e5e5e5" }}
        >
          <Card.Body className="home-orange bgc-orange"></Card.Body>
        </Card>
        <Icon />
      </Row>
    </Container>
  );
};

export default Home;
