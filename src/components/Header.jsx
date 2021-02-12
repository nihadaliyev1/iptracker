import React from "react";
import styled, { keyframes, css } from "styled-components";
import Container from "../helpers/Container";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import Dashboard from "./Dashboard";
import { addLoader, removeLoader, setCoordinates } from "../actions";
import { connect } from "react-redux";

const initialValues = {
  ip: "",
};

const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const validationSchema = Yup.object({
  ip: Yup.string()
    .required("The IP adress is required")
    .matches(ipRegex, "Invalid Ip"),
});

const FormWrapper = styled.div`
  width: 50%;
  display: flex;
  @media only screen and (max-width: 770px) {
    width: 65%;
  }
  @media only screen and (max-width: 550px) {
    width: 75%;
  }
  @media only screen and (max-width: 430px) {
    width: 85%;
  }
  @media only screen and (max-width: 340px) {
    width: 95%;
  }
`;

const Headerr = styled.header`
  height: 35vh;
  padding-top: 3.5rem;
  background-image: url(${require("../images/pattern-bg.png").default});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.2px;
  text-align: center;
  @media only screen and (max-width: 770px) {
    font-size: 2.6rem;
  }
`;

const SubmitButton = styled.button.attrs({ type: "submit" })`
  width: 10.4%;
  border-radius: 0px 1.5rem 1.5rem 0px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
  cursor: pointer;
  transition: 0.2s all;

  &::after {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    background-image: url(${require("../images/icon-arrow.svg").default});
    width: 1.2rem;
    height: 1.5rem;
    background-repeat: no-repeat;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }

  @media only screen and (max-width: 650px) {
    width: 15.4%;
  }
  @media only screen and (max-width: 450px) {
    width: 20.4%;
  }
`;

const errorAnimation = keyframes`
  0% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
  37% {
    transform: translateX(5px);
    timing-function: ease-out;
  }
  55% {
    transform: translateX(-5px);
    timing-function: ease-in;
  }
  73% {
    transform: translateX(4px);
    timing-function: ease-out;
  }
  82% {
    transform: translateX(-4px);
    timing-function: ease-in;
  }
  91% {
    transform: translateX(2px);
    timing-function: ease-out;
  }
  96% {
    transform: translateX(-2px);
    timing-function: ease-in;
  }
  100% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
}
`;

const Input = styled(Field).attrs({
  placeholder: "Search for any IP address or domain",
})`
  width: 89.5%;
  padding: 1.9rem 2.4rem;
  border-radius: 1.5rem 0 0 1.5rem;
  outline: none;
  border: none;
  font-size: 1.8rem;
  line-height: 2.1rem;

  ${({ formik }) => {
    if (formik.errors.ip && formik.touched.ip) {
      return css`
        animation-name: ${errorAnimation};
        animation-duration: 0.5s;
        animation-timing-function: ease-in;
        border: 2px solid #ff0033;
      `;
    } else {
      return null;
    }
  }}

  @media only screen and (max-width: 420px) {
    padding: 1.9rem 2rem;
  }
  @media only screen and (max-width: 380px) {
    padding: 1.9rem 1.6rem;
  }

  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.rubik};

    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.colors.lightgray};
    @media only screen and (max-width: 880px) {
      font-size: 1.6rem;
    }
    @media only screen and (max-width: 550px) {
      font-size: 1.4rem;
    }
    @media only screen and (max-width: 420px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 380px) {
      font-size: 1.1rem;
    }
  }
`;

const Formm = styled(Form)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const Header = ({ setCoordinates, location, addLoader, removeLoader }) => {
  const onSubmit = async (values) => {
    addLoader();
    await setCoordinates(values.ip);
    removeLoader();
  };
  return (
    <Headerr>
      <Container>
        <Title>IP Address Tracker</Title>
        <Formik
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          initialValues={initialValues}
        >
          {(formik) => {
            return (
              <Formm>
                <FormWrapper>
                  <Input formik={formik} name="ip" id="ip" />
                  <SubmitButton />
                </FormWrapper>
              </Formm>
            );
          }}
        </Formik>
        <Dashboard />
      </Container>
    </Headerr>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps, {
  setCoordinates,
  addLoader,
  removeLoader,
})(Header);
