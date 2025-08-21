import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="py-3 mt-auto">
      <p className="m-0 text-center text-muted" style={{ fontSize: "0.9rem" }}>
        {t("footer.rights")}
      </p>
    </footer>
  );
}
