import * as Yup from "yup";
import { toast } from "react-toastify";

export const initialValues = {
  ip: "",
};

export const ipRegex =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

export const validationSchema = Yup.object({
  ip: Yup.string()
    .required(() => {
      return toast.error("IPv4 or IPv6 address is required", {
        toastId: 1,
      });
    })
    .matches(ipRegex, () => {
      return toast.error("Please, input correct IPv4 or IPv6 address.", {
        toastId: 2,
      });
    }),
});
