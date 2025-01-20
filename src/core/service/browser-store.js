let  browserStore= {
  delLocale(a) {
    localStorage.removeItem(a);
  },

  setLocale(a, v) {
    localStorage.setItem(a, JSON.stringify(v));
  },

  getLocale(v) {
    const u = localStorage.getItem(v);
    if (u && u != "undefined") return JSON.parse(u);
  },

  localeClear() {
    localStorage.clear();
  },

  delSession(a) {
    sessionStorage.removeItem(a);
  },

  setSession(a, v) {
    sessionStorage.setItem(a, JSON.stringify(v));
  },

  getSession(a) {
    const u = sessionStorage.getItem(a);
    if (u) return JSON.parse(u);
  },

  sessionClear() {
    sessionStorage.clear();
  },
};
export default browserStore