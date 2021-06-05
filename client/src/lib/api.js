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

export const participationlistAPI = async () => {
  try {
    const response = await axios.get('/api/user/simplebids', {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
}