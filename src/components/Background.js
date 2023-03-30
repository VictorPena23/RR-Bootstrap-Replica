import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function Background() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Card
          className="text-black"
          style={{ 
            width: "1300px", 
            minHeight: "428px", 
            marginBottom: "50px", 
            backgroundColor: "#2d7961" 
          }}
        >
          <div
            style={{ 
              top: "auto", 
              width: "578px", 
              marginLeft: "100px", 
              marginBottom: "50px", 
              marginTop: "75px" 
            }}
          >
            <Card.Text
              style={{ 
                fontSize: "2.5em", 
                fontWeight: "bold" 
              }}
            >
              Order groceries for delivery <br /> or pickup today
            </Card.Text>
            <Card.Text
              style={{ 
                fontSize: "1em" 
              }}
            >
              Get what you want whenever you want from our place.
            </Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control 
                  size="lg" 
                  type="text" 
                  placeholder="   Put in the addy                                         " 
                />
              </Form.Group>
            </Form>
          </div>
        </Card>
      </div>
      <div>
        <img 
          src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg" 
          alt="Card image" 
          style={{ 
            height: "428px", 
            width: "30%", 
            position: "absolute", 
            backgroundSize: "contain", 
            backgroundRepeat: "no-repeat" 
          }} 
        />
      </div>
    </div>
  );
}
