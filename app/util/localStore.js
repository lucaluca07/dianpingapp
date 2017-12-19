export default {
  getItem: key => {
    let val;
    try {
      val = localStorage.getItem(key);
    } catch (err) {
      if (__DEV__) {
        console.error(`localStorage.getItem错误:${err.message}`);
      }
    } finally {
      return val;
    }
  },

  setItem: (key, val) => {
    try {
      localStorage.setItem(key, val);
    } catch (err) {
      if (__DEV__) {
        console.error(`localStorage.getItem错误:${err.message}`);
      }
    }
  }
};
