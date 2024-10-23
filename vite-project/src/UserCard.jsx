function User(props)
{
    return (
        <div className="cart-container">
            <span className="pro">Online</span>
            <img className="img" src="../public/images/vijay.jpg" alt="user" />
            <h3>{props.name}</h3>
            <h3>{props.place}</h3>
            <p>{props.job}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    <li>UiUx</li>
                    <li>FrontEnd</li>
                    <li>HTML</li>
                    <li>Css</li>
                    <li>ReactJs</li>
                    <li>javaScript</li>
                    <li>Node</li>
                </ul>
            </div>
        </div>
    )
}

export const UserCard = () => {
  return (
    <>
        <User name = "Thalapathy" place = "India" job = "Actor" />
    </>
  )
}
