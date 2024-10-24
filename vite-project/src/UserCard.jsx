import PropTypes from "prop-types";

function User(props)
{
    return (
        <div className="cart-container">
            <span className={props.online ? "pro online" : "pro offline"}>{props.online? "Online" : "Offline"}</span>
            <img className="img" src={props.image} alt="user" />
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
                    {props.skills.map((skills , index) => (
                        <li key={index}>{skills}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export const UserCard = () => {
  return (
    <>
        {
            userData.map((data , index) => (<User key={index} 
            name = {data.name}
            place = {data.city}
            job = {data.Job}
            skills = {data.Skills}
            online = {data.online}
            image = {data.image}
            />))
        }
    </>
  )
}

// <User name = "Thalapathy" place = "India" job = "Actor" skills = {["Acting" , "Dancing" , "Singing"]} online = {true} image = "../public/images/vijay.jpg"/>

const userData = [
    {
        name : 'Thalapathy Vijay',

        city : "Chennai",

        Job : "Actor",

        Skills : ["Acting" , "Dancing" , "Singing"],

        online : true, 

        image : "../public/images/vijay.jpg"
    },

    {
        name : 'Siva Karthikeyan',

        city : "Chennai",

        Job : "Actor",

        Skills : ["Acting" , "Dancing" , "Singing", "Writing" , "Director"],

        online : false,

        image : "../public/images/sk.jpg"
    },

    {
        name : 'Vijay Sethupathy',

        city : "Chennai",

        Job : "Actor",

        Skills : ["Acting" , "Host" , "Singing"],

        online : true,

        image : "../public/images/vjs.jpg"
    },

]
User.prototypes = 
{
    name: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    online: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired

}