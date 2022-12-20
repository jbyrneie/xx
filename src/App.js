// Original Repo
// https://bitbucket.org/dcor_atlassian/atlassian-web-developer-code-exercise/src/master/
import data from "./data.js";
import "@atlaskit/css-reset";
import { useState } from "react";
import Page, { Grid } from "@atlaskit/page";
import Navigation from "./Navigation";
import Tabs from "./Tabs";
import Sidebar from "./Sidebar";
import Post from "./Post";

export default function App() {
  const [tracks] = useState([
    ...new Set(data.Items.map((track) => track.Track.Title))
  ]);
  const [activeTrack, setActiveTrack] = useState("Build");
  const filteredTrackData = data.Items.filter((d) => {
    return d.Track.Title === activeTrack;
  });
  const [activePost, setActivePost] = useState(filteredTrackData[0]);

  const handleTrackChange = (event) => {
    setActiveTrack(event.target.innerHTML);
    const postToShow = data.Items.filter((d) => {
      return event.target.innerHTML === d.Track.Title ? d : false;
    })[0];
    setActivePost(postToShow);
  };

  const handlePostChange = (event) => {
    data.Items.filter((d) => {
      return event.target.getAttribute("data-post-id") === d.Id
        ? setActivePost(d)
        : false;
    });
  };

  return (
    <div className="App">
      <Page>
        <Navigation />
        <Tabs
          activeTrack={activeTrack}
          tracks={tracks}
          handleTrackChange={handleTrackChange}
        />
        <Grid testId="grid-content">
          <Sidebar
            filteredTrackData={filteredTrackData}
            handlePostChange={handlePostChange}
            activeTrack={activeTrack}
            activePost={activePost}
          />
          <Post activePost={activePost} />
        </Grid>
      </Page>
    </div>
  );
}
