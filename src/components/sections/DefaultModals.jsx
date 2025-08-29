import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Dialog } from "primereact/dialog";
import { X } from "lucide-react";
import content from "../../content/content";
import Button from "../interactives/Button";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import IconButtonFeatureCard from "../cards/IconButtonFeatureCard";

export default function FeaturesParagraphs({ colorMode }) {
  const { t } = useTranslation();

  // Estado do modal
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const openModal = (num) => {
    const card = content.texts.features[`card${num}`];

    setModalTitle(t(`features.card${num}.title`));
    setModalContent(
      <div className="text-paragraph3">
        <p className="mb-8">
          <Trans i18nKey={`features.card${num}.description`} />
        </p>
        <p className="mt-[20px] mb-[18px]">Quer saber mais? Clique abaixo 👇</p>

        <Button
          aria-label={t("about.ctaButtonAriaLabel")}
          label={t("about.ctaButtonText")}
          animation={false}
          className="hover:scale-105 bg-buttonColor text-labelButtons"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-whatsapp"
              viewBox="0 0 18 18"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          }
        />
      </div>
    );
    setVisible(true);
  };

  // Classes de tema
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "bg-bgSectionDark",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea id="service" className={bgClass}>
      <SectionHeader
        colorMode="dark"
        className="text-center"
        miniTitle={t("features.miniTag")}
        sectionHeaderTitle={t("features.title")}
        sectionHeaderSubtitle={t("features.subtitle")}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
      />

      <SectionWrapper>
        <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
          <div className="flex flex-wrap items-start justify-center w-full gap-[40px]">
            {[1, 2, 3, 4, 5, 6].map((num) => {
              const card = content.texts.features[`card${num}`];
              return (
                <MotionDivDownToUp
                  key={num}
                  className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] rounded-md bg-bgSectionLight tablet1:w-[46.5%] desktop1:w-[28%] desktop2:w-[25%]"
                >
                  <IconButtonFeatureCard
                    icon={card.icon}
                    title={t(`features.card${num}.title`)}
                    paragraph={t(`features.card${num}.subtitle`)}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                    colorMode={colorMode}
                  />
                  <Button
                    size="small"
                    className="bg-buttonColor"
                    labelColor="text-black"
                    label={t(`features.card${num}.buttonLabel`)}
                    onClick={() => openModal(num)}
                  />
                </MotionDivDownToUp>
              );
            })}

            <p className="font-mainFont w-[90%] desktop1:w-[80%] text-black/70 text-center">
              Atuo exclusivamente como apoio técnico, respeitando os limites
              legais do bacharel em Direito. Não presto serviços de consultoria
              jurídica ao público, não assino peças e não realizo protocolos em
              nome próprio.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Modal */}
      <Dialog
        className="font-secondFont"
        closeIcon={<X size={20} />}
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "60vw", "1024px": "70vw", "641px": "85vw" }}
      >
        {modalContent}
      </Dialog>
    </SectionArea>
  );
}
