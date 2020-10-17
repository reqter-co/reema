import { FC } from "react";
import Link from "next/link";
import useTranslation from "@Hooks/useTranslation";
interface IProps {
  href: string;
}
const LinkCMP: FC<IProps> = ({ href, children, ...rest }) => {
  const { currentLang } = useTranslation();
  return (
    <Link href={`/${currentLang}${href}`} {...rest}>
      {children}
    </Link>
  );
};

export default LinkCMP;
