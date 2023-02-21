import {
  CustomTokenPayload,
  UserApiResponseStructure,
  UserCredentials,
} from "../../types/types";
import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import { loginUserActionCreator } from "../../store/features/robotsSlice/userSlice/userSlice";

interface useUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): useUserStructure => {
  const apiUrl = process.env.REACT_APP_URL!;
  const dispatch = useAppDispatch();
  const tokenKey = process.env.REACT_APP_TOKEN_KEY!;

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(`${apiUrl}users/login`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    try {
      const { token } = (await response.json()) as UserApiResponseStructure;
      const { username } = decodeToken(token) as CustomTokenPayload;

      localStorage.setItem(tokenKey, token);

      dispatch(loginUserActionCreator({ username, token }));
    } catch (error) {
      throw error;
    }
  };

  return { loginUser };
};

export default useUser;
