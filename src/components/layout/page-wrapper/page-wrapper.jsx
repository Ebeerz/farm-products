import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
// import MainPage from "/src/components/pages/main-page/main-page";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import { StyledPageWrapper } from "./styles";

// Обёртка для контента страниц
function PageWrapper() {
  return (
    <>
      <Header />
      <StyledPageWrapper>
        {/* <MainPage /> */}
        <BuyPage />
      </StyledPageWrapper>
      <Footer />
    </>
  );
}

export default PageWrapper;