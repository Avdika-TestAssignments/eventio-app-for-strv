import { TOKEN } from "../Config/constants";
import { browserCheck } from '../Config/browserCheck';

const storeRefreshToken = (refreshToken) => {
  if (browserCheck()) {
    window.localStorage.setItem(TOKEN.REFRESH_TOKEN, refreshToken);
  }
}

const getRefreshToken = () => browserCheck() ? window.localStorage.getItem(TOKEN.REFRESH_TOKEN) || '' : '';

export { storeRefreshToken, getRefreshToken };
