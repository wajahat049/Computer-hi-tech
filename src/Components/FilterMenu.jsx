import {
    Button,
    Container,
    Row,
    Col,
    DropdownButton,
    Dropdown,
    Form,
    Collapse,
    ButtonGroup,
    Accordion,
    Pagination
  } from "react-bootstrap";
  import MainCard from "../Components/Card";
  import "../App.css";
  import useWindowDimensions from "../Components/WindowDImension";
  import "react-bootstrap-drawer/lib/style.css";
  import React, { useEffect, useState } from "react";
  import { Drawer } from "react-bootstrap-drawer";
  import background from "../Images/bg.jpg";
import { useParams } from "react-router-dom";


const FilterMenuMemories = (props) => {
  
    const Arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    const [open, setOpen] = useState(false);
  
    const handleToggle = () => setOpen(!open);
  
    return (
      <Drawer className="react-bootstrap-drawer " {...props}>
        <Drawer.Toggle  onClick={handleToggle} />
  
        <Collapse in={open}>
          <Drawer.Overflow>
            <Drawer.ToC>
              <Drawer.Header>
                {" "}
                <h3> Filters </h3>
              </Drawer.Header>
              <Drawer.Nav>
                <div className="mb-2">
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Memory Type</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label="DDR4 LRDIMM"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label="DDR3 LRDIMM"
                            />{" "}
                          </Form.Group>
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label="DDR4 SDRAM"
                            />
                          </Form.Group>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Capacity</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label="1 TB"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label="512 GB "
                            />{" "}
                          </Form.Group>
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label="256 GB"
                            />
                          </Form.Group>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Data Transfer Rate</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label="3200 MHz"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label="2933 MHz "
                            />{" "}
                          </Form.Group>
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label="2666 MHz"
                            />
                          </Form.Group>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Voltage</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label="2.5 V"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label="1.8 V"
                            />{" "}
                          </Form.Group>
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label="1.5 V"
                            />
                          </Form.Group>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Pins</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label="288 Pins"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label="240 Pins"
                            />{" "}
                          </Form.Group>
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label="240 Pins"
                            />
                          </Form.Group>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Drawer.Nav>
            </Drawer.ToC>
          </Drawer.Overflow>
        </Collapse>
      </Drawer>
    );
  };

  export {FilterMenuMemories}