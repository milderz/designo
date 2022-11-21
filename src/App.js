import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutCard from "./Components/AboutCard";
import AboutUsSection from "./Components/AboutUsSection";
import ContactBanner from "./Components/ContactBanner";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import ProjectsPreview from "./Components/ProjectsPreview";
import { GlobalStyles } from "./Components/Styles/GlobalStyles";
import LocationsContainer from "./Components/LocationsContainer";
import Wrapper from "./Components/Wrapper";
import ContactForm from "./Components/ContactForm";
import ServiceHeader from "./Components/ServiceHeader";
import ProjectsContainer from "./Components/ProjectsContainer";
import {
  WebDesign,
  AppDesign,
  GraphicDesign,
} from "./ProjectsData/ProjectsData";
import ServicePreviewWrapper from "./Components/ServicePreviewWrapper";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainContainer />
                <ProjectsPreview />
                <Container />
                <ContactBanner />
                <Footer offset={true} />
              </>
            }
          />
          <Route
            path="/our-company"
            element={
              <>
                <AboutUsSection />
                <AboutCard
                  version="primary"
                  title="World-class talent"
                  text1="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
                  text2="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission. "
                  bgImg="/assets/about/desktop/image-world-class-talent.jpg"
                  bgImgMobile="/assets/about/mobile/image-world-class-talent.jpg"
                />
                <Wrapper />
                <AboutCard
                  title="The real deal"
                  text1=" As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. "
                  text2=" We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results. "
                  bgImg="/assets/about/desktop/image-real-deal.jpg"
                  bgImgMobile="/assets/about/mobile/image-real-deal.jpg"
                />
                <ContactBanner />
                <Footer offset={true} />
              </>
            }
          ></Route>
          <Route
            path="/locations"
            element={
              <>
                <LocationsContainer />
                <ContactBanner />
                <Footer offset={true} />
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                <ContactForm />
                <Wrapper />
                <Footer offset={false} />
              </>
            }
          ></Route>
          <Route
            path="/web-design"
            element={
              <>
                <ServiceHeader
                  service="Web design"
                  text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
                />
                <ProjectsContainer projects={WebDesign} />
                <ServicePreviewWrapper web={true} />

                <ContactBanner />
                <Footer offset={true} />
              </>
            }
          />
          <Route
            path="/app-design"
            element={
              <>
                <ServiceHeader
                  service="App design"
                  text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
                />
                <ProjectsContainer projects={AppDesign} />
                <ServicePreviewWrapper app={true} />
                <ContactBanner />
                <Footer offset={true} />
              </>
            }
          />
          <Route
            path="/graphic-design"
            element={
              <>
                <ServiceHeader
                  service="Graphic design"
                  text="We deliver eye-catching branding materials that are tailored to meet your business objectives."
                />
                <ProjectsContainer projects={GraphicDesign} />
                <ServicePreviewWrapper graphic={true} />
                <ContactBanner />
                <Footer offset={true} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
