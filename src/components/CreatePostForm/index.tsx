import { useState } from "react";

import { Button } from "../../styles/Button";
import * as S from "./styles";

interface CreatePostFormProps {
  onCreate: (title: string, content: string) => void;
}

const CreatePostForm = ({ onCreate }: CreatePostFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onCreate(title, content);

    setTitle("");
    setContent("");
  };

  return (
    <S.Card>
      <S.CardTitle>What's on your mind?</S.CardTitle>
      <S.Form onSubmit={handleSubmit}>
        <S.Label>Title</S.Label>
        <S.Input
          type="text"
          placeholder="Hello world"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.Label>Content</S.Label>
        <S.TextArea
          placeholder="Content here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" disabled={!title.trim() || !content.trim()}>
          Create
        </Button>
      </S.Form>
    </S.Card>
  );
};

export default CreatePostForm;
