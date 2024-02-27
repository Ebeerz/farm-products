import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import MainPage from "/src/components/pages/main-page/main-page";
import { StyledPageWrapper } from "./styles";

// Обёртка для контента страниц
function PageWrapper() {
  return (
    <>
      <Header />
      <StyledPageWrapper>
        <MainPage />
      </StyledPageWrapper>
      <Footer />
    </>
  );
}

export default PageWrapper;