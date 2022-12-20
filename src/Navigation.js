import { AtlassianLogo, AtlassianIcon } from "@atlaskit/logo";
import { N0, N100, B200, B400 } from "@atlaskit/theme/colors";
import styled from "styled-components";
import { Grid, GridColumn } from "@atlaskit/page";

const StyledNavbar = styled.div`
  background-color: ${B400};
  padding: 1rem 0;
`;

const HeroTitle = styled.h1`
  text-align: center;
  color: ${N100};
  font-weight: 400;
  margin-top: 0.5rem;
`;

const HeroWrap = styled.div`
  text-align: center;
  padding-bottom: 4rem;
  padding-top: 4rem;
`;

export default function Navigation() {
  return (
    <div>
      <StyledNavbar>
        <Grid>
          <GridColumn medium={12}>
            <AtlassianLogo textColor={N0} iconColor={N0} />
          </GridColumn>
        </Grid>
      </StyledNavbar>
      <Grid>
        <GridColumn medium={12}>
          <HeroWrap>
            <AtlassianIcon
              iconColor={B200}
              iconGradientStart={B400}
              iconGradientStop={B200}
              size="xlarge"
            />
            <HeroTitle>Summit 2015 Video Archive</HeroTitle>
          </HeroWrap>
        </GridColumn>
      </Grid>
    </div>
  );
}
