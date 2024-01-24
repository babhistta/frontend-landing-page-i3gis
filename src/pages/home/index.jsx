import ModuleSection from "./section/modul";
import LandingSection from "./section/landing";
import PartnerSection from "./section/partners";
import BenefitSection from "./section/benefit";
import ArticleSection from "./section/article";
import FAQSection from "./section/faq";
import { Container } from "@mui/material";
import InterestedSection from "./section/interested";

export default function HomePage() {
  return (
    <Container maxWidth="100vw" style={{ paddingRight: 0, paddingLeft: 0 }}>
      <LandingSection />
      <ModuleSection />
      <PartnerSection />
      <BenefitSection />
      <ArticleSection />
      <InterestedSection />
      <FAQSection />
    </Container>
  );
}
