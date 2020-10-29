import { LINKEDIN_URL } from "@Shared/helper/socialAuth";
interface IProps {}
const SocialButton: React.FC<IProps> = ({ children, ...rest }) => {
  return (
    <a href={LINKEDIN_URL} {...rest}>
      {children}
    </a>
  );
};

export default SocialButton;
