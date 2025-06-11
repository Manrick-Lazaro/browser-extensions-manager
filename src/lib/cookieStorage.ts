// lib/cookie-storage.ts
import Cookies from "js-cookie";

export const cookieStorage = {
  getItem: (name: string) => {
    if (typeof window !== "undefined") {
      return Cookies.get(name) || null;
    }
    return null;
  },
  setItem: (name: string, value: string) => {
    Cookies.set(name, value, {
      expires: 30, // 1 ano
      sameSite: "lax",
      path: "/",
    });
  },
  removeItem: (name: string) => {
    Cookies.remove(name);
  },
};
