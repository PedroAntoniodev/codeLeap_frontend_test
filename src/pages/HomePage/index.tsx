import { useState } from "react";

import * as S from "./styles";
import { Button } from "../../styles/Button";

const HomePage = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username.trim()) {
      alert("Please enter your username");
      return;
    }

    localStorage.setItem("username", username);

    console.log("User logged in:", username);
  };
  return (
    <S.HomePageContainer>
      <S.Card>
        <S.CardTitle>Welcome to CodeLeap network</S.CardTitle>
        <S.Form onSubmit={handleSubmit}>
          <S.Label>Please enter your username</S.Label>
          <S.Input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button type="submit" disabled={!username.trim()}>
            ENTER
          </Button>
        </S.Form>
      </S.Card>
    </S.HomePageContainer>
  );
};

export default HomePage;
