import Nav from "react-bootstrap/Nav";

function NavB() {
  return (
    <div>
      <div id="mainNav">
        <Nav className="justify-content-start">
          <div className="smlNav">
            <Nav.Item>
              <img src="https://media.istockphoto.com/id/1464727449/vector/book-media-logo-design-icon-template.jpg?s=612x612&w=0&k=20&c=OZo97JVOmebHY-gvbJYtwCVqjfaX_fSL80yFtp0rmTM="></img>{" "}
            </Nav.Item>
            <Nav.Item>
              <h5 id="libraryName">Video Library</h5>
            </Nav.Item>
          </div>
        </Nav>

        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/" style={{color:"white" ,marginTop:"12px" }}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/About" style={{color:"white" ,marginTop:"12px"}}>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/BuyOnline" style={{color:"white",marginTop:"12px"}}>Buy Online</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Contact" style={{color:"white" ,marginTop:"12px"}}>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}
export default NavB;
