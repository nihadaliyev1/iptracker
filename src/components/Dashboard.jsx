import React from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.5rem;
  padding: 3.2rem 4.3rem;
  position: relative;
  z-index: 1000000000000000;
  top: 6rem;
  transition: 0.7s all;
  opacity: 0;
  transform: translateY(-20rem);
  ${({ loading }) => {
    if (loading === false) {
      return css`
        opacity: 1;
        transform: translateY(0rem);
      `;
    }
  }};

  @media only screen and (max-width: 820px) {
    pad @media only screen and (max-width: 880px) {
      padding: 3rem 2.3rem;
    }
    ding: 3rem 1.8rem;
  }
  @media only screen and (max-width: 770px) {
    padding: 2.4rem 0;
    top: 1.5rem;
    width: 95%;
    margin: 0 auto;
  }
`;

const InfoList = styled.ul`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 770px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0 3.2rem;
  width: 26.9%;
  position: relative;

  @media only screen and (max-width: 970px) {
    padding: 0 2.6rem;
  }
  @media only screen and (max-width: 820px) {
    padding: 0 2rem;
  }
  @media only screen and (max-width: 770px) {
    width: 100%;
    align-items: center;
    padding: 0;
    
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

  }

  &:not(:last-child)::after {
    content: "";
    height: 7.5rem;
    width: 1px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.15);
    @media only screen and (max-width: 770px) {

      display:none;
  }
  }


}

`;

const ItemTitle = styled.h3`
  font-size: 1.2rem;
  line-height: 1.4rem;
  letter-spacing: 1.75px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.lightgray};

  margin-bottom: 1.3rem;

  @media only screen and (max-width: 770px) {
    font-size: 1.3rem;

    margin-bottom: 7px;
  }
`;

const ItemDescription = styled.p`
  font-weight: 500;
  font-size: 2.6rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.darkgray};
  @media only screen and (max-width: 1080px) {
    font-size: 2.2rem;
  }
  @media only screen and (max-width: 880px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 770px) {
    font-size: 2rem;
  }
`;

const Dashboard = ({ location, loading }) => {
  return (
    <ContentWrapper loading={loading}>
      {location && (
        <InfoList>
          <ListItem>
            <ItemTitle>IP Address</ItemTitle>
            <ItemDescription>{location.ip}</ItemDescription>
          </ListItem>
          <ListItem>
            <ItemTitle>Location</ItemTitle>
            <ItemDescription>
              {location.location.city}, {location.location.region},
              {location.location.postalCode}
            </ItemDescription>
          </ListItem>
          <ListItem>
            <ItemTitle>Timezone</ItemTitle>
            <ItemDescription>UTC {location.location.timezone}</ItemDescription>
          </ListItem>
          <ListItem>
            <ItemTitle>ISP</ItemTitle>
            <ItemDescription>{location.isp}</ItemDescription>
          </ListItem>
        </InfoList>
      )}
    </ContentWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(Dashboard);
