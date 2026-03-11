import * as S from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <S.Modal>
      <S.ModalContent>{children}</S.ModalContent>
    </S.Modal>
  );
};

export default Modal;
