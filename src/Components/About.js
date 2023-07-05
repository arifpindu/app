import React,{useState} from "react";

export default function About() {
 
  const [Style, setStyle] = useState({
    color:"black",
    backgroundColor:"white"
  })
  const toggleTheme = () => {
    if (Style.color === "black") {
      setStyle({
        color: "white",
        backgroundColor:"black"
      })
    } else {
      setStyle({
        color: "black",
        backgroundColor:"white"
      })
    }}
  return (
    <>
      <div className="container " style={Style}>
        <div className="card mb-3" style={Style}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card" style={Style}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <button onClick={toggleTheme} className="btn btn-outline-primary">Click Me</button>
      </div>
    </>
  );
}
