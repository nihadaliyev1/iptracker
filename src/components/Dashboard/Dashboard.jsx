import React from "react";
import {
  ContentWrapper,
  InfoList,
  ItemDescription,
  ListItem,
  ItemTitle,
} from "./DashboardStyles";
import { dashboardVariants } from "./DashboardAnimations";

const Dashboard = ({ data }) => {
  if (!data) {
    return null;
  } else {
    return (
      <ContentWrapper
        variants={dashboardVariants}
        initial="hidden"
        animate="visible"
      >
        {data.location && (
          <InfoList>
            <ListItem>
              <ItemTitle>IP Address</ItemTitle>
              <ItemDescription>{data.ip}</ItemDescription>
            </ListItem>
            <ListItem>
              <ItemTitle>Location</ItemTitle>
              <ItemDescription>
                {data.location.city}, {data.location.region},
                {data.location.postalCode}
              </ItemDescription>
            </ListItem>
            <ListItem>
              <ItemTitle>Timezone</ItemTitle>
              <ItemDescription>UTC {data.location.timezone}</ItemDescription>
            </ListItem>
            <ListItem>
              <ItemTitle>ISP</ItemTitle>
              <ItemDescription>{data.isp}</ItemDescription>
            </ListItem>
          </InfoList>
        )}
      </ContentWrapper>
    );
  }
};

export default Dashboard;
