const API_URL = "https://dev.codeleap.co.uk/careers/";

// search posts
export const fetchPosts = async () => {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();
  return data.results;
};

export const createPost = async (
  username: string,
  title: string,
  content: string,
) => {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, title, content }),
  });
};

export const updatePost = async (
  id: number,
  title: string,
  content: string,
) => {
  await fetch(`${API_URL}${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });
};

export const deletePost = async (id: number) => {
  await fetch(`${API_URL}${id}/`, {
    method: "DELETE",
  });
};
