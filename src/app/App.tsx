import Container from "@/components/Container";
import PostTile from "@/components/PostTile";
import "minireset.css";
import "./App.css";
import { posts } from "./posts";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {posts.map((p, i) => (
          <PostTile key={i} postData={p} />
        ))}
      </Container>
    </ThemeProvider>
  );
}

export default App;
