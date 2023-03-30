import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export default function StoreListings() {
    return (
        <div style={{ margin: "auto" }}>
            <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>Browse stores in Las Vegas</h2>
            <Container style={{ marginTop: "50px", textAlign: "left" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }} >
                    <Row>
                        <Col xs=".5" >
                            <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://companieslogo.com/img/orig/WMT-0d8ecd74.png?t=1633217525" roundedCircle />
                        </Col>
                        <Col style={{ textAlign: "left" }}>
                            <h5 style={{ fontWeight: "bold" }}>Walmart</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png" roundedCircle />
                        </Col>
                        <Col style={{ textAlign: "left" }}>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/771px-Target_logo.svg.png" roundedCircle />
                        </Col>
                        <Col md="6">
                            <h5 style={{ fontWeight: "bold" }}>Target</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>


                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly", marginTop: "40px" }} >
                    <Row>
                        <Col xs=".5" >
                            <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://download.logo.wine/logo/WinCo_Foods/WinCo_Foods-Logo.wine.png" roundedCircle />
                        </Col>
                        <Col style={{ textAlign: "left" }}>
                            <h5 style={{ fontWeight: "bold" }}>Winco Foods</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://1000logos.net/wp-content/uploads/2021/04/Costco-logo.png" roundedCircle />
                        </Col>
                        <Col style={{ textAlign: "left" }}>
                            <h5 style={{ fontWeight: "bold" }}>Costco</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://1000logos.net/wp-content/uploads/2021/09/Sams-Club-Logo-2006.png" roundedCircle />
                        </Col>
                        <Col md="6">
                            <h5 style={{ fontWeight: "bold" }}>Sam's Club</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>

            </Container>
        </div >
    )
    }