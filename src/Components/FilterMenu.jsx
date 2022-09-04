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
  
    const [open, setOpen] = useState(false);
  
    const handleToggle = () => setOpen(!open);
    const tabs = [
      {id:1,label:"Memory Type",Options:["DDR4 LRDIMM","DDR3 LRDIMM","DDR4 SDRAM"]},
      {id:2,label:"Capacity",Options:["512 GB","256 GB","128 GB","8 GB","4 GB"]},
      {id:3,label:"Data Transfer Rate",Options:["3200 MHz","2933 MHz","2666 MHz"]},
      {id:4,label:"Voltage",Options:["2.5 V","1.8 V","1.5 V"]}
    ]
  
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
                {tabs.map(tab => (
        <Accordion key={tab.id} defaultActiveKey={tab.id} flush>
           <Accordion.Item eventKey="0">
                      <Accordion.Header>{tab.label}</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                        {tab.Options.map((option)=>{
                            return(
                            <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label={option}
                            />
                          </Form.Group>
                            )
                          })}
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
          ))}
          <Button style={{marginTop:"5%",padding:"2% 7% 2% 7%"}} variant="dark">Apply</Button>
                </div>
              </Drawer.Nav>
            </Drawer.ToC>
          </Drawer.Overflow>
        </Collapse>
      </Drawer>
    );
  };

  const FilterMenuCPUs = (props) => {
  
    const [open, setOpen] = useState(false);
  
    const handleToggle = () => setOpen(!open);
    const tabs = [
      {id:1,label:"CPU Socket Type",Options:["LGA 2066","LGA 1151"]},
      {id:2,label:"Clock Speed",Options:["3.60 GHz","3.59 GHz","2.90 GHz"]},
      {id:3,label:"L3 Cache Size",Options:["11 MB","8 MB"]},
      {id:4,label:"Core",Options:["Intel i3","Intel i5","Intel i7","Intel i9"]},
      {id:5,label:"Generation",Options:["3rd","4th","5th","6th","7th","8th","9th","10th","11th"]},
      {id:6,label:"Category",Options:["Server","Desktop","Mobile"]}
    ]
  
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
                {tabs.map(tab => (
        <Accordion key={tab.id} defaultActiveKey={tab.id} flush>
           <Accordion.Item eventKey="0">
                      <Accordion.Header>{tab.label}</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          {tab.Options.map((option)=>{
                            return(
                            <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label={option}
                            />
                          </Form.Group>
                            )
                          })}
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
          ))}
          <Button style={{marginTop:"5%",padding:"2% 7% 2% 7%"}} variant="dark">Apply</Button>
                </div>
              </Drawer.Nav>
            </Drawer.ToC>
          </Drawer.Overflow>
        </Collapse>
      </Drawer>
    );
  };



  const FilterMenuHardDrives = (props) => {
  
    const [open, setOpen] = useState(false);
  
    const handleToggle = () => setOpen(!open);
    const tabs = [
      {id:1,label:"Brand",Options:["Apple","Dell","EMC","Fujitsu","IBM","HP","Lenovo","Toshiba","Samsung"]},
      {id:2,label:"Capacity",Options:["10 TB","8 TB","6 TB","4 TB","1 TB","750 GB","500 GB"]},
      {id:3,label:"Interface",Options:["Serial-ATA (SATA)","Serial Attached SCSI (SAS)","Fibre Channel (FC)","USB (Internal)"]},
      {id:4,label:"Speed",Options:["15000 RPM","10000 RPM","7200 RPM","5900 RPM"]},
      {id:5,label:"Segment",Options:["Hitachi Datacenter","Seagate Datacenter","Toshiba Datacenter","Hitachi Enterprise","Seagate Enterprise","Toshiba Enterprise","Hitachi NAS","Seagate NAS","Toshiba NAS"]},
    ]
  
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
                {tabs.map(tab => (
        <Accordion key={tab.id} defaultActiveKey={tab.id} flush>
           <Accordion.Item eventKey="0">
                      <Accordion.Header>{tab.label}</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          {tab.Options.map((option)=>{
                            return(
                            <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label={option}
                            />
                          </Form.Group>
                            )
                          })}
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
          ))}
          <Button style={{marginTop:"5%",padding:"2% 7% 2% 7%"}} variant="dark">Apply</Button>
                </div>
              </Drawer.Nav>
            </Drawer.ToC>
          </Drawer.Overflow>
        </Collapse>
      </Drawer>
    );
  };



  const FilterMenuSSDs = (props) => {
  
    const [open, setOpen] = useState(false);
  
    const handleToggle = () => setOpen(!open);
    const tabs = [
      {id:1,label:"Brand",Options:["Crucial","Dell","EMC","Kingston","IBM","HP","Lenovo","Toshiba","Samsung","Intel","Segate"]},
      {id:2,label:"Form Factor",Options:["mSATA","M.2 (NGFF)","2.5-inch Drive","3.5-inch Drive","Add-in Card","DOM"]},
      {id:3,label:"Interface",Options:["Serial-ATA (SATA)","Serial Attached SCSI (SAS)","Fibre Channel (FC)","USB (Internal)"]},
      {id:4,label:"Capacity",Options:["4 TB","2 TB","1 TB","750 GB","500 GB","250 GB","128 GB"]},
      {id:5,label:"Flash Type",Options:["SLC","MLC","TLC"]},
      {id:6,label:"Category",Options:["EnterPrise","Desktop","Laptop"]},
      
    ]
  
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
                {tabs.map(tab => (
        <Accordion key={tab.id} defaultActiveKey={tab.id} flush>
           <Accordion.Item eventKey="0">
                      <Accordion.Header>{tab.label}</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          {tab.Options.map((option)=>{
                            return(
                            <Form.Group
                            className="mb-1"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              style={{ width: "100%" }}
                              type="checkbox"
                              label={option}
                            />
                          </Form.Group>
                            )
                          })}
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
          ))}
          <Button style={{marginTop:"5%",padding:"2% 7% 2% 7%"}} variant="dark">Apply</Button>
                </div>
              </Drawer.Nav>
            </Drawer.ToC>
          </Drawer.Overflow>
        </Collapse>
      </Drawer>
    );
  };


  export {FilterMenuMemories,FilterMenuCPUs,FilterMenuHardDrives,FilterMenuSSDs}