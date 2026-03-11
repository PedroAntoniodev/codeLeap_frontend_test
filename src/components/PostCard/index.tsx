import { useState } from "react";
import * as S from "./styles";

import Delete from "../../assets/images/delete-icon.png";
import Edit from "../../assets/images/edit-icon.png";
import type { Post } from "../../types/post";
import DeleteModal from "../DeleteModal";
import EditModal from "../EditModal";

interface PostCardProps {
  post: Post;
  currentUser: string;
  onDelete: (id: number) => void;
  onUpdate: (id: number, title: string, content: string) => void;
}

const PostCard = ({ post, onDelete, onUpdate, currentUser }: PostCardProps) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const isOwner = post.username === currentUser;

  return (
    <S.PostCard>
      <S.CardHeader>
        <S.CardTitle>{post.title}</S.CardTitle>
        {isOwner && (
          <S.IconsContainer>
            <S.Button onClick={() => setIsDeleteOpen(true)}>
              <img src={Delete} alt="Delete button" />
            </S.Button>
            <S.Button onClick={() => setIsEditOpen(true)}>
              <img src={Edit} alt="Edit button" />
            </S.Button>
          </S.IconsContainer>
        )}
      </S.CardHeader>
      <S.CardContentContainer>
        <S.ParagraphContainer>
          <S.Paragraph>@{post.username}</S.Paragraph>
          <S.Paragraph>
            {new Date(post.created_datetime).toLocaleString("en-US", {
              dateStyle: "short",
              timeStyle: "short",
            })}
          </S.Paragraph>
        </S.ParagraphContainer>
        <S.Content>{post.content}</S.Content>
      </S.CardContentContainer>

      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onDelete={() => {
          onDelete(post.id);
          setIsDeleteOpen(false);
        }}
      />

      <EditModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        post={post}
        onSave={onUpdate}
      />
    </S.PostCard>
  );
};

export default PostCard;
