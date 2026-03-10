import Header from "../../components/Header";
import CreatePostForm from "../../components/Header/CreatePostForm";

import * as S from "./styles";

const MainPage = () => {
  return (
    <S.MainPageContainer>
      <Header />
      <CreatePostForm />
    </S.MainPageContainer>
  );
};

export default MainPage;
