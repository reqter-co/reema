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
  FaAudible,
  FaGg,
  FaBlackberry,
  FaCloudsmith,
  FaGoogle,
  FaUser,
  FaCaretDown,
  FaCaretUp,
  FaGooglePlus,
} from "react-icons/fa";

const icons: { [key in string]: any } = {
  time: <BsClock />,
  financial: <BsGraphUp />,
  legal: <BsLayoutWtf />,
  tests: <BsChatSquareQuote />,
  close: <BsX />,
  instagram: <FaInstagram />,
  google: <FaGoogle />,
  "google-plus": <FaGooglePlus />,
  facebook: <FaFacebook />,
  linkedin: <FaLinkedin />,
  email: <FaEnvelope />,
  phone: <FaPhone />,
  technology: <FaAudible />,
  measure: <FaBlackberry />,
  math: <FaCloudsmith />,
  health: <FaGg />,
  user: <FaUser />,
  "caret-down": <FaCaretDown />,
  "caret-up": <FaCaretUp />,
};
const Icon = ({ name = "" }) => {
  return icons[name.toLowerCase()] ? icons[name.toLowerCase()] : "";
};

export default Icon;
