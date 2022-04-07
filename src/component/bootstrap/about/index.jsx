import { Card, Container, Row, Button } from "react-bootstrap";
import '../bootstrap.css';
import Aboutp from "./aboutp";
const About = () => {
    return(
        <Container id="About" className="col-lg-12 mt ">
            <Row className="col-lg-12">
              <Card
                className="col-lg-6 col-md-6 col-sm-6 home bgc-whitesmoke border-secondary "
              style={{borderRadius:'10px',background:'#e5e5e5'}}>
                <Card.Body
                  className="fw-bold text-center mt"
                >
             <h2 className="fw-light">Ardhian Agil Ramadhan</h2>
                   <p className="fst-italic fw-light">
                      <em>S1 informatika</em><br />
                      <em>umur 24</em><br />
                      <em>Sidoarjo, Jatim 61271</em>
                    </p>
                  <Button variant="outline-secondary" className="mt-3">Github</Button>
                </Card.Body>
              </Card>
              <Aboutp />
            </Row>
          </Container>
      )
}

export default About;