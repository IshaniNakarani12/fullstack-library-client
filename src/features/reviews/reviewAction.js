import { postNewReview } from "./reviewAxios";
import { toast } from "react-toastify";

export const addNewReviewAction = (obj) => async (dispatch) => {
  const pending = postNewReview(obj);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status === "success") {
    return true;
    //fetch the seleted book
  }
};
