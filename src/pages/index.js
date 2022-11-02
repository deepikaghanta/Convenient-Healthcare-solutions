import "/Users/deepikaghanta/Desktop/hci/src/App.css";
import { useState } from "react";
import JSONDATA from "/Users/deepikaghanta/Desktop/hci/src/MOCK_DATA.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for help"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return; // this returns evverything; val is the entire json data
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            {/* {val.first_name}
              <img src={val.icon} /> */}
            <div class="row">
              <Card>
                <Card.Img variant="top" src={val.icon} />
                <Card.Body>
                  <Card.Title>{val.first_name}</Card.Title>
                  <Card.Text>Video</Card.Text>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = val.video;
                    }}
                  >
                    Click to play Video
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
