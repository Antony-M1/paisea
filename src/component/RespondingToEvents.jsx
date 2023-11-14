
const Button = ({onClick, children}) => {
    return(
        <button onClick={onClick}>
            {children}
        </button>
    )
}

const PlayButton = ({movieName}) => {
    const handlePlayClick = () => {
        alert(`Playing ${movieName}`)
    }

    return (
        <Button onClick={handlePlayClick}>
            Play {movieName}
        </Button>
    )
}


const UploadButton = () => {
    return (
        <Button onClick={() => alert('Uploading...')}>
            Upload Image
        </Button>
    )
}

const ToolBar = () => {
    return (
      <>
        <div
          className="ToolBar"
          style={{
            height: "50px",
            width: "100%",
            backgroundColor: "antiquewhite",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          onClick={() => alert("onClick in the Tool Bar")}
        >
          <button onClick={() => alert("onClick in button 1")}>Button 1</button>
          <button onClick={() => alert("onClick in button 2")}>Button 2</button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert("Progation Stopped");
            }}
          >
            Stop Propagation
          </button>
        </div>
        <h1>onClickCapture</h1>
        <div
          className="ToolBar 2"
          style={{
            height: "50px",
            width: "100%",
            backgroundColor: "aqua",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClickCapture={() => alert('No Restriction I will run even the stopPropagation() method used')}
        >
          <button onClick={(e) => {
            e.stopPropagation();
            alert('Button1 e.stopPropagation() used')
          }}>Button 1</button>
          <button onClick={(e) => {
            e.stopPropagation();
            alert('Button2 e.stopPropagation() used')
          }}>Button 2</button>
        </div>
      </>
    );
}

const RespondingToEvents = () => {

    function handleClick() {
        alert('You Clicked Me');
    }

    return (
      <>
        <PlayButton movieName="Leo Vijay Movie" />
        <UploadButton />
        <hr/>
        <h1>Propagation</h1>
        <ToolBar />
        <hr/>
      </>
    );
}

export default RespondingToEvents