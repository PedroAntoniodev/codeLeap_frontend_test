import { CancelButton } from "../EditModal/styles";
import Modal from "../Modal";

import * as S from "./styles";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal = ({ isOpen, onClose, onDelete }: DeleteModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.DeleteModalContent>
        <S.ModalTitle>Are you sure you want to delete this item?</S.ModalTitle>
        <S.ButtonContainer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <S.DeleteButton onClick={onDelete}>Delete</S.DeleteButton>
        </S.ButtonContainer>
      </S.DeleteModalContent>
    </Modal>
  );
};

export default DeleteModal;
