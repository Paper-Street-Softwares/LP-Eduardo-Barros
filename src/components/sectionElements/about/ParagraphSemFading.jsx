import Paragraphs from "../Paragraphs";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

export default function ParagraphSemFading() {
  const { t } = useTranslation();

  return (
    <Paragraphs className="text-colorWhite text-opacity-80">
      {/* Renderiza HTML/JSX do JSON */}
      <Trans i18nKey="about.paragraph" />

      {t("about.paragraph")}
    </Paragraphs>
  );
}
