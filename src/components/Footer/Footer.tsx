import { useTranslation } from "../../utils/useTranslation";
import "./Footer.css";

const Footer = () => {
  const t = useTranslation();

  return (
    <div className="footer">
      <span>{t("footer")}</span>
    </div>
  );
};

export default Footer;
