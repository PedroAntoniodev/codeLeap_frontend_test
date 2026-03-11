import Header from "../../components/Header";
import CreatePostForm from "../../components/CreatePostForm";

import * as S from "./styles";
import PostCard from "../../components/PostCard";
import { useEffect, useState } from "react";
import {
  createPost,
  deletePost,
  fetchPosts,
  updatePost,
} from "../../api/posts";
import type { Post } from "../../types/post";

const MainPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const username = localStorage.getItem("username") || "Guest";

  const loadPosts = async () => {
    try {
      const postsData = await fetchPosts();
      setPosts(postsData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    (async () => {
      await loadPosts();
    })();
  }, []);

  const handleCreate = async (title: string, content: string) => {
    await createPost(username, title, content);
    loadPosts();
  };

  const handleUpdate = async (id: number, title: string, content: string) => {
    await updatePost(id, title, content);
    loadPosts();
  };

  const handleDelete = async (id: number) => {
    await deletePost(id);
    loadPosts();
  };

  return (
    <S.MainPageContainer>
      <Header />
      <CreatePostForm onCreate={handleCreate} />
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          currentUser={username}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </S.MainPageContainer>
  );
};

export default MainPage;
