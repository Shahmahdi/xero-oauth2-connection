// import axios from "axios";
// import {Buffer} from 'buffer';

export const getTokenFromXero = async () => {
  try {
    const redirectUrl = encodeURI("http://localhost:5173");
    const clientId = "86AFC373A4E642A48A6501314FB0255C";
    const url = `https://login.xero.com/identity/connect/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=openid profile email&state=123`;
    console.log(`url: `, url);
    window.location.href=url;
    return;
  } catch (error) {
    console.log("error: ", error);
  }
}

// export const getAccessToken = async (code) => {
//   try {
//     const clientId = "86AFC373A4E642A48A6501314FB0255C";
//     const clientSecret = "wU_gbu48L2IvgJ_pIKBc-m7g_i_fr29GzfZJApXHpejJKGmJ";
//     const authorizationValue = `${clientId}:${clientSecret}`;
//     const response = await axios.post("https://identity.xero.com/connect/token", {
//       grant_type: "authorization_code",
//       code,
//       redirect_uri: "http://localhost:5173"
//     }, {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         authorization: "Basic " + Buffer.from(authorizationValue).toString('base64')
//       },
//     });
//     console.log("response: ", response);
//   } catch (error) {
//     console.log("error: ", error);
//   }
// }