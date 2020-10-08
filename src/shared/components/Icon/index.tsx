import {
  BsClock,
  BsGraphUp,
  BsLayoutWtf,
  BsChatSquareQuote,
  BsX,
} from "react-icons/bs";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const icons: { [key in string]: any } = {
  time: <BsClock />,
  financial: <BsGraphUp />,
  legal: <BsLayoutWtf />,
  numbers: <BsChatSquareQuote />,
  close: <BsX />,
  instagram: <FaInstagram />,
  facebook: <FaFacebook />,
  linkedin: <FaLinkedin />,
  email: <FaEnvelope />,
  phone: <FaPhone />,
};
const Icon = ({ name = "" }) => {
  return icons[name.toLowerCase()] ? icons[name.toLowerCase()] : "";
};

export default Icon;
