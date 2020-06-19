import React from "react";
// import { CardElement } from "react-stripe-elements";
import { Col } from "reactstrap";

const AddressSection = ({ handleChange, setName }) => {
  return (
    <div>
      <div className="form-control">
        {/* <Col xs="6" sm="6" md="6"> */}
        <label htmlFor="name">
          Name
          <input
            className=""
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            required
          />
        </label>
        {/* </Col> */}
      </div>
      <div className="form-control">
        <Col xs="6" sm="6" md="6">
          <label className="w-100">
            Email
            <input
              className="w-100"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="jane.doe@example.com"
              required
            />
          </label>
        </Col>
      </div>
      <div className="form-control">
        <Col xs="6" sm="6" md="6">
          <label className="w-100">
            Address
            <input
              className="w-100"
              type="text"
              name="address"
              onChange={handleChange}
              placeholder="100 Legends Way"
              required
            />
          </label>
        </Col>
      </div>
      <div className="form-control">
        <Col xs="5" sm="5" md="6">
          <label className="w-100">
            Cell
            <input
              className="w-100"
              type="tel"
              name="number"
              onChange={handleChange}
              placeholder="781-111-1111"
              required
            />
          </label>
        </Col>
      </div>
      <div className="form-control">
        <Col xs="4" sm="4" md="6">
          <label className="w-100">
            City
            <input
              className="w-100"
              type="text"
              name="city"
              onChange={handleChange}
              placeholder="Boston"
              required
            />
          </label>
        </Col>
      </div>
      <div className="form-control">
        <Col xs="3" sm="3" md="6">
          <label className="w-100">
            State
            <input
              className="w-100"
              type="text"
              name="state"
              onChange={handleChange}
              placeholder="MA"
              required
            />
          </label>
        </Col>
      </div>
    </div>
  );
};

export default AddressSection;
