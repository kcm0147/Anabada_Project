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

export const modifyUserInfo = async (payload) => {
  try {
    const response = await axios.post(
      "/api/user/address",
      {
        newAddress: payload.address,
      },
      {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
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

export const enrollItemAPI = async (payload) => {
  //물품 등록 api
  try {
    const response = await axios.post("/api/saleItem/enrollItem", payload, {
      headers: {
        "Content-type": "multipart/form-data",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getAllItems = async () => {
  try {
    const response = await axios.get("/api/item/all", {
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

export const getItemsWithName = async (payload) => {
  try {
    const response = await axios.post("/api/item/name", payload.includedName, {
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

export const addWishItem = async (payload) => {
  try {
    const response = await axios.post("/api/wishitem/add", payload.itemId, {
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

export const removeWishItem = async (payload) => {
  try {
    const response = await axios.post("/api/wishitem/remove", payload.itemId, {
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

export const getWishItemsAPI = async () => {
  // 찜한 목록 데이터 api
  try {
    const response = await axios.get("/api/user/wishItems", {
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

export const buyItem = async (payload) => {
  try {
    const response = await axios.post("/buyItem/add", payload, {
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

export const getBest8Items = async () => {
  try {
    const response = await axios.get("/api/item/best8", {
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
