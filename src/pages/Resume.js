import resumeSnapshot from "../assets/Resume-Snapshot.png";

export default function Resume() {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Jaxson Lybbert Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let downloadLink = document.createElement("a");
        downloadLink.href = fileURL;
        downloadLink.download = "Jaxson Lybbert Resume.pdf";
        downloadLink.click();
      });
    });
  };
  return (
    <>
      <h2>You can download a copy of my resume here.</h2>
      <center>
        <img id="resume" src={resumeSnapshot} alt="Resume"></img>
        <button id="submitBtn" onClick={onButtonClick}>
          Download
        </button>
      </center>
    </>
  );
}
