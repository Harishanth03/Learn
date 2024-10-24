import { useState } from "react"
import "./QrCode.css"

const QrCode = () => {

  const [image , setImg] = useState("");

  const[loading , setLoading] = useState(false);

  const [qrData , setQrData] = useState("https://tutorjoes.in/");

  const [imageSize , setImageSize] = useState("150")

  async function generateQR()
  {

    setLoading(true);

    try
    {
      const URL = `https://api.qrserver.com/v1/create-qr-code/?size=${imageSize}x${imageSize}&data=${encodeURIComponent(qrData)}`;

      setImg(URL);

    }
    catch(error)
    {

      console.error("The error is: " + error);

    }
    finally
    {

      setLoading(false)

    }

  }

  function downloadQR()
  {
    fetch(image).then((Response) => Response.blob()).then((blob) => {
      
      const link = document.createElement("a");

      link.href = URL.createObjectURL(blob);

      link.download = "qrcode.png";

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    })
  }

  return (

    <div className="app-container">

      <h1>QR CODE GENERATOR</h1>

      {loading && <p>Please Wait...</p>}

      {image && <img src={image} className="qr-code-image"/>}

        <div>
          <label htmlFor="dataInput" className="input-lable">Data for QR code</label>

          <input type="text" id="dataInput" placeholder="Enter Data for QR code" onChange={(e) => setQrData(e.target.value)}/>

          <label htmlFor="sizeInput" className="input-lable">Image size (e.g , 150): </label>
          
          <input type="text" id="sizeInput" placeholder="Enter QR code size" onChange={(e) => setImageSize(e.target.value)}/>

          <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR code</button>

          <button className="download-button" onClick={downloadQR}>Download QR code</button>

        </div>

    </div>

  )

}

export default QrCode