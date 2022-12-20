import styled from "styled-components";
import { Grid, GridColumn } from "@atlaskit/page";
import { N50, N20, N30, N0 } from "@atlaskit/theme/colors";

const TabWrap = styled.div`
  display: flex;
  border-bottom: 1px solid ${N50};
`;

const Tab = styled.div`
  padding: 0.75rem 1rem;
  background-color: ${N20};
  border: 1px solid ${N50};
  border-right: 0;
  margin-bottom: -1px;
  transition: all 0.25s ease-in-out;

  &:last-of-type {
    border-top-right-radius: 0.5rem;
    border-right: 1px solid ${N50};
  }

  &:first-of-type {
    border-top-left-radius: 0.5rem;
  }

  &:hover {
    background-color: ${N30};
  }

  // Active Styles
  ${({ active }) =>
    active &&
    `
    background-color: ${N0};
    border-bottom: 1px solid ${N0};

    &:hover {
      background-color: ${N0};
    }
  `}
`;

export default function Tabs({ tracks, handleTrackChange, activeTrack }) {
  return (
    <Grid testId="grid-tabs">
      <GridColumn medium={12}>
        <TabWrap>
          {tracks.map((track, i) => {
            if (track !== "Activities" && track !== "Training") {
              return (
                <Tab
                  onClick={(event) => handleTrackChange(event)}
                  key={`${track}-${i}`}
                  active={activeTrack === track}
                >
                  {track}
                </Tab>
              );
            } else {
              return false;
            }
          })}
        </TabWrap>
      </GridColumn>
    </Grid>
  );
}
