import axios from "axios";

export const getTokenFromXero = async () => {
  try {
    const redirectUrl = "https://xero-oauth2-connection.vercel.app";
    const clientId = "86AFC373A4E642A48A6501314FB0255C";
    const url = `https://login.xero.com/identity/connect/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=openid profile email&state=123`;
    console.log(`url: `, url);
    const res = await axios.get(url);
    console.log("======", res);
  } catch (error) {
    console.log("error: ", error);
  }
}