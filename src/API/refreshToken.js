import { TOKEN } from "../Config/constants";

const storeRefreshToken = (refreshToken = '') => {
  window.localStorage.setItem([TOKEN.REFRESH_TOKEN], refreshToken)
}

const getRefreshToken = () => window.localStorage.getItem([TOKEN.REFRESH_TOKEN])

export { storeRefreshToken, getRefreshToken };
