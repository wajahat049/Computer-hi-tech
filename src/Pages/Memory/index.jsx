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
import MainCard from "../../Components/Card";
import "../../App.css";
import useWindowDimensions from "../../Components/WindowDImension";
import "react-bootstrap-drawer/lib/style.css";
import React, { useEffect, useState } from "react";

import { Drawer } from "react-bootstrap-drawer";
import background from "../../Images/bg.jpg";

const ApplicationDrawer = (props) => {

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
                </Accordion>
              </div>
            </Drawer.Nav>
          </Drawer.ToC>
        </Drawer.Overflow>
      </Collapse>
    </Drawer>
  );
};

const Memories = (props) => {
  const [paginationSize,setpaginationSize] = useState("lg")
  const { height, width } = useWindowDimensions();
  const Arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  useEffect(()=>{
    if(width<500){
      setpaginationSize("sm")
    }
    console.log("xbxsxnsx;nsnxsnx;sx",width)
  },[width])
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Col as={ApplicationDrawer} xs={12} md={3} lg={3} />
        <Col xs={12} md={8} lg={9}>
          <div>
            <div style={{ width: "65%" }}>
              <h1>Memories</h1>
            </div>
            <div className="sort-bar">
              <Form.Select aria-label="Default select example">
                <option value="1">Sort by Price(Low to High)</option>
                <option value="2">Sort by Price(High to Low)</option>
                <option value="3">Sort by Popularity</option>
              </Form.Select>
            </div>
          <div style={{border:"2px solid white"}}  >
            <Row
              xs={2}
              s={2}
              md={4}
              l={5}
              className="g-4"
              style={{
                marginTop: "5%"
              }}
            >
              {Arr.map(() => {
                return (
                  
                    <MainCard
                      src="https://www.memory4less.com/images/products/Img0922/AB322-60001-lg.jpg"
                      title="AB322-60001 HP 4GB PC133 133MHz "
                      price="$313.78"
                    />
                  
                );
              })}
            </Row>
            <Row style={{marginTop:"10%",textAlign:"center"}}>
            <Pagination size={paginationSize} >
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
 

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
</Row>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Memories;
