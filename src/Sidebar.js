import styled from "styled-components";
import { N50, N30, N20, N100 } from "@atlaskit/theme/colors";
import { GridColumn } from "@atlaskit/page";

const ActiveTrack = styled.h3`
  margin-bottom: 0.75rem;
  padding-top: 2rem;
  font-weight: 700;
`;

const Post = styled.div`
  padding: 0.75rem 0.5rem;
  border-top: 1px solid ${N50};
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: ${N20};
  }

  ${({ active }) =>
    active &&
    `
    background-color: ${N30};

    &:hover {
      background-color: ${N30};
    }
  `}
`;

const PostTitle = styled.p`
  color: ${N100};
  font-size: 0.75rem;
`;

export default function Sidebar({
  filteredTrackData,
  handlePostChange,
  activeTrack,
  activePost
}) {
  return (
    <GridColumn medium={4}>
      <ActiveTrack>{activeTrack}</ActiveTrack>
      {filteredTrackData.map((post, i) => {
        return (
          <Post
            key={i}
            data-post-id={post.Id}
            onClick={(event) => handlePostChange(event)}
            active={activePost.Id === post.Id}
          >
            <h5 data-post-id={post.Id}>{post.Title}</h5>
            <PostTitle data-post-id={post.Id}>
              {post.Speakers[0].FirstName} {post.Speakers[0].LastName},{" "}
              {post.Speakers[0].Company}
            </PostTitle>
          </Post>
        );
      })}
    </GridColumn>
  );
}
