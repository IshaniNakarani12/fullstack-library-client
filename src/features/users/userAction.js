import { setUser } from "./userSlice";
import { fetchUserInfo, loginUser } from "./userAxios";
import { toast } from "react-toastify";

export const getUserObj = () => async (dispatch) => {
  const { status, user } = await fetchUserInfo();
  console.log(status, user);

  //update store
  dispatch(setUser(user));
};

export const userSignInAction = (obj) => async (dispatch) => {
  const pending = loginUser(obj);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message, tokens } = await pending;
  toast[status](message);
  //store tokens in the sessions
  sessionStorage.setItem("accessJWT", tokens.accessJWT);
  localStorage.setItem("refreshJWT", tokens.refreshJWT);

  if (status === "success") {
    dispatch(getUserObj());
  }
};
