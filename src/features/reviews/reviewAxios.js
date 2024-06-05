import { apiProcesser } from "../../helpers/axiosHelper";

const reviewEP = import.meta.env.VITE_APP_ROOT_SERVER + "/api/v1/reviews";

export const postNewReview = async (obj) => {
  const axiosObj = {
    method: "post",
    url: reviewEP,
    data: obj,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};
