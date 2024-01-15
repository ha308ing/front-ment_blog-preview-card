import illustration from "@/assets/images/illustration-article.svg";
import avatar from "@/assets/images/image-avatar.webp";
import BlogTile from "./BlogTile/BlogTile";
import Container from "./Container";

const data = {
  tags: [{ name: "Learning", url: "/learning" }],
  pic: illustration,
  pubdate: { year: 2023, month: 12, day: 21 },
  title: "HTML & CSS foundations",
  snippet:
    "These languages are the backbone of every website, defining structure, content, and presentation.",
  author: { avatar, name: "Greg Hooper" },
};

function App() {
  return (
    <Container>
      <BlogTile data={data} />
    </Container>
  );
}

export default App;
