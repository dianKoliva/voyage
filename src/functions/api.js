import axios from "axios";
export const trips=async(token,date)=>{
    console.log(date)
  
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.get(
        `http://63.142.252.251/transportation-test/web/index.php/v1/routing/planned?date=${date}`,
       config
      );
      return response;
}

export const login=async(name,password)=>{
    const response = await axios.post(
        `http://63.142.252.251/transportation-test/web/index.php/v1/accounts/login?username=${name}&password=${password}`,
      );
      return response.data;
}
export const stations=async(token)=>{
  
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.get(
        `http://63.142.252.251/transportation-test/web/index.php/v1/routing/stations`,
       config
      );
      return response.data;
}