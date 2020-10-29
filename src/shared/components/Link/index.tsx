import { FC } from "react";
import Link from "next/link";
import useLanguage from "@Hooks/useLanguage";
interface IProps {
  href: string;
}
const LinkCMP: FC<IProps> = ({ href, children, ...rest }) => {
  const { currentLang } = useLanguage()
  return (
    <Link href={`/${currentLang}${href}`} {...rest}>
      {children}
    </Link>
  );
};

export default LinkCMP;
