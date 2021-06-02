import { axios } from "axios";

export const login = async (accountId, password) => {
  try {
    const response = await axios.post(
      "/api/user/login",
      {
        accountId,
        password,
      },
      {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response;
    // if (response.data === "") alert("잘못된 로그인 정보입니다")
    // else dispatch(login(res.data))
  } catch (e) {
    console.error(e);
  }
};
