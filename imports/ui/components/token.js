import Cookies from "js-cookie";
const key = "tripRecAuth";

export default {
  set(token) {
    Cookies.set(key, token);
    return localStorage.setItem(key, token);
  },
  clear() {
    Cookies.remove(key);
    return localStorage.removeItem(key);
  },
  get() {
    try {
      const retVal = localStorage.getItem(key) || "";
      return retVal;
    } catch (e) {
      return "";
    }
  }
};
