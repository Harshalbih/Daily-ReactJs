import { Link } from "react-router-dom";
const Error = () => {
    return(
        <div className="error-page">
        <img src="https://img.freepik.com/premium-vector/404-error-page-found-with-donut_114341-54.jpg?w=1060" alt="404"></img>
        <h2>Don't worry, You can still go back</h2>
        <h3 className="error-back-home">
        <Link to="/">Home</Link>
      </h3>
       </div>
    )
}

export default Error;