import "./QrCode.css"

const QrCode = () => {
  return (
    <div className="app-container">

      <h1>QR CODE GENERATOR</h1>

      <img src="../public/images/vijay.jpg" className="qr-code-image"/>

        <div>
          <label htmlFor="dataInput" className="input-lable">Data for QR code</label>

          <input type="text" id="dataInput" placeholder="Enter Data for QR code"/>

          <label htmlFor="sizeInput" className="input-lable">Image size (e.g , 150): </label>
          
          <input type="text" id="sizeInput" placeholder="Enter QR code size"/>

          <button className="generate-button">Generate QR code</button>

          <button className="download-button">Download QR code</button>

        </div>

    </div>

  )

}

export default QrCode