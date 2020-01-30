import Link from "next/link";
import styled from "styled-components";

const Index = () => (
  <div>
    <Title>Hello world!</Title>
    <Link href="/about">
      <a>Detail page</a>
    </Link>
  </div>
);
export default Index;

const Title = styled.h1`
  color: green;
`;
