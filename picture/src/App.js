function App() {

  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(data);
  }
  
  return (
    
    <div>
      <p>Drag the W3Schools image into the rectangle:</p>

      <div  id="div1" onDrop={drop} ondragOver={allowDrop}></div>
      <img
        alt="imagew"
        id="drag1"
        src="https://www.w3schools.com/html/img_logo.gif"
        draggable="true"
        ondragStart={drag}
        width="336"
        height="69"
      ></img>
    </div>
  );
}

export default App;
