import axios from "axios";

export const login = async (payload) => {
  try {
    const response = await axios.post("/api/user/login", payload, {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const register = async (payload) => {
  try {
    const response = await axios.post("/api/user/signup", payload, {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getUserInfo = async () => {
  try {
    const response = await axios.get("/api/user/info", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const participationlistAPI = async () => {
  // 유저 경매 참여 내역 api
  try {
    const response = await axios.get("/api/user/simplebids", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const enrolledItemsAPI = async () => {
  // 유저 등록 물품 데이터 api
  try {
    const response = await axios.get("/api/user/enrolledItems", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const bestSearchAPI = async () => {
  // 상위 검색어 데이터 api
  try {
    const response = await axios.get("/api/item/favoriteSearch", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
