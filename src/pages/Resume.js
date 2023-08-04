import resumeSnapshot from "../assets/Resume-Snapshot.png";
import resumePDF from "../assets/Jaxson Lybbert Resume.pdf";

export default function Resume() {
  // // Function will execute on click of button
  // const onButtonClick = () => {
  //   // using Java Script method to get PDF file
  //   fetch(resumePDF).then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = resumePDF;
  //       alink.click();
  //     });
  //   });
  // };
  return (
    <>
      <h2>You can download a copy of my resume here.</h2>
      <center>
        <img id="resume" src={resumeSnapshot} alt="Resume"></img>

        <button id="submitBtn" onClick={onButtonClick}>
          {
            <a className="downloadLink" href={resumePDF}>
              Download
            </a>
          }
        </button>
      </center>
    </>
  );
}
