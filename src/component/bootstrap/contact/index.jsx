import {Container, Row, Table} from "react-bootstrap";
import Formx from './form';
const Tabel = () =>{
    return (

     <Container className="p-3 mt" id="Contact">
        <Row className="col-lg-12 my-2">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Table striped bordered hover>
              <thead className="bgc-orange" style={{color:'whitesmoke'}}>
                <tr>
                  <th>NO</th>
                  <th>Programing Language</th>
                  <th>Tingkat</th>
                </tr>
              </thead>
              <tbody className="text-center fw-light">
                <tr>
                  <td>1</td>
                  <td>Mongo</td>
                  <td><hr className="mongo" /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Express</td>
                  <td><hr className="express" /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>React</td>
                  <td><hr className="react" /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Node</td>
                  <td><hr className="node" /></td>
                </tr>
              </tbody>
            </Table>
          </div>
         <Formx />
        </Row>
      </Container>
    )
}

export default Tabel;