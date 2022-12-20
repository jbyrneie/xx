import styled from "styled-components";
import { GridColumn } from "@atlaskit/page";

const PostTitle = styled.h1`
  margin-bottom: 0.75rem;
  padding-top: 3rem;
`;
const PostBody = styled.p`
  margin-bottom: 2rem;
`;
const LightText = styled.span`
  font-weight: 400;
`;

export default function Post({ activePost }) {
  function pluralizedHeadline(speakerLength) {
    const theS = speakerLength.length > 1 ? "s" : "";
    return <h2>About the speaker{theS}</h2>;
  }
  return (
    <GridColumn medium={8}>
      <PostTitle>{activePost.Title}</PostTitle>
      <PostBody>{activePost.Description}</PostBody>
      <a
        href="https://www.youtube.com/user/GoAtlassian"
        target="_blank"
        rel="noreferrer"
      >
        See the Q&A from this talk and others here.
      </a>
      {pluralizedHeadline(activePost.Speakers)}
      {activePost.Speakers.map((elem, i) => {
        return (
          <h5 key={`${elem.FirstName}-${i}`}>
            {elem.FirstName} {elem.LastName},{" "}
            <LightText>{elem.Company}</LightText>
          </h5>
        );
      })}
    </GridColumn>
  );
}
