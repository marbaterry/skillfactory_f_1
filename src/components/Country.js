import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import "../styles/Country.css";
// import PropTypes from "prop-types";

function Country(props) {
const [selected, changeSelected] = useState(false);
// console.log(props.prop)
// props.someFunction()

    return(
        <tr>
            <td>{props.capital}</td>
            <td>{props.name}</td>
            <td><Button variant="success"  onClick={() =>props.someFunction(props.lat, props.lon, "daily", props.name)}  >DAILY</Button>
            <Button variant="success"  onClick={() =>props.someFunction(props.lat, props.lon, "hourly", props.name)}  >HOURLY</Button></td>
        </tr>
    );
}

Country.defaultProps = {
    capital: "not available"
}

// Country.propTypes = {
//     country: PropTypes.oneOfType([
//         PropTypes.object,
//         PropTypes.array
//     ]),
// };

export default Country;