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
  import SearchBar from "../Components/SearchBar"
  import { Drawer } from "react-bootstrap-drawer";
  import background from "../Images/bg.jpg";
import { useParams } from "react-router-dom";
import { FilterMenuCPUs, FilterMenuHardDrives, FilterMenuMemories, FilterMenuSSDs } from "../Components/FilterMenu";
  
  const Category = (props) => {
    const params = useParams()
    const [paginationSize,setpaginationSize] = useState("lg")
    const { height, width } = useWindowDimensions();
    const Arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    useEffect(()=>{
        console.log("PARAMS",params)
      if(width<500){
        setpaginationSize("sm")
      }
      console.log("xbxsxnsx;nsnxsnx;sx",width)
    },[width])
    return (
        <>
        <SearchBar/>
      <Container fluid>
        <Row className="flex-xl-nowrap">
          {params.id=="Memories"?
          <Col as={FilterMenuMemories} xs={12} md={3} lg={3} />
    :params.id=="CPUs"?
    <Col as={FilterMenuCPUs} xs={12} md={3} lg={3} />
    :params.id=="HardDrives"?
    <Col as={FilterMenuHardDrives} xs={12} md={3} lg={3} />
    :params.id=="SSDs"?
    <Col as={FilterMenuSSDs} xs={12} md={3} lg={3} />
  :null}
          <Col xs={12} md={8} lg={9}>
            <div>
              <div style={{ width: "65%" }}>
                <h1>{params.id}</h1>
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
      </>
    );
  };
  
  export default Category;
  