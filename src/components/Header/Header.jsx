import React, { useContext, useEffect } from "react";
import Container from "../../helpers/Container";
import { Formik } from "formik";
import Dashboard from "../Dashboard/Dashboard";
import { useSetCoordinatesQuery } from "../../apis";
import AppContext from "../../context/AppContext";
import { toast } from "react-toastify";
import {
  Headerr,
  Title,
  Formm,
  FormWrapper,
  Input,
  SubmitButton,
} from "./HeaderStyles";
import { validationSchema, initialValues } from "./FormSettings";

const Header = () => {
  const { skip, setSkip, ip, setIp } = useContext(AppContext);
  const { data, isError, error } = useSetCoordinatesQuery(ip, {
    skip,
  });
  const onSubmit = (values) => {
    setIp(values.ip);
    setSkip(false);
  };

  useEffect(() => {
    if (isError) toast.error(error.data.messages, { toastId: 3 });
  }, [isError, error?.data?.messages]);
  return (
    <Headerr>
      <Container>
        <Title>IP Address Tracker</Title>
        <Formik
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          initialValues={initialValues}
          validateOnBlur={false}
          validateOnChange={false}
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
        <Dashboard data={data} />
      </Container>
    </Headerr>
  );
};

export default Header;
