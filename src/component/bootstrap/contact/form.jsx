import { Form, Button } from "react-bootstrap";

const Formx = () => {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12">
      <h2 className="fw-light text-center">Contact Me</h2>
      <label for="email" class="form-label">
        Email
      </label>
      <Form.Control type="email" id="" placeholder="Masukan Email" />

      <label for="saran" class="form-label mt-3">
        Saran
      </label>
      <div class="form-floating">
        <Form.Control
          as="textarea"
          placeholder="Masukan Sarab"
          id="floatingTextarea2"
          style={{ height: "100px" }}
        ></Form.Control>
        <label for="floatingTextarea2">Saran</label>
      </div>
      <div class="d-grid gap-2">
        <Button className="mt-3" style={{ background: "#f58840" }}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Formx;
