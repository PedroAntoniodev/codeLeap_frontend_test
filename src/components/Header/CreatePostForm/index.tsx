import { Button } from "../../../styles/Button";
import * as S from "./styles";

const CreatePostForm = () => {
  return (
    <S.Card>
      <S.CardTitle>What's on your mind?</S.CardTitle>
      <S.Form>
        <S.Label>Title</S.Label>
        <S.Input type="text" placeholder="Hello world" />
        <S.Label>Content</S.Label>
        <S.TextArea placeholder="Content here" />
        <Button type="submit">Create</Button>
      </S.Form>
    </S.Card>
  );
};

export default CreatePostForm;
