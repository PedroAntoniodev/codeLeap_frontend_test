import { useState } from "react";
import Modal from "../Modal";

import * as S from "./styles";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: { id: number; title: string; content: string };
  onSave: (id: number, title: string, content: string) => void;
}

const EditModal = ({ isOpen, onClose, post, onSave }: EditModalProps) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSave = () => {
    onSave(post.id, title, content);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.EditModalContent>
        <S.ModalTitle>Edit item</S.ModalTitle>
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
        <S.ButtonContainer>
          <S.CancelButton onClick={onClose}>Cancel</S.CancelButton>
          <S.SaveButton onClick={handleSave}>Save</S.SaveButton>
        </S.ButtonContainer>
      </S.EditModalContent>
    </Modal>
  );
};

export default EditModal;
