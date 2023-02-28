import axios from "axios";
export const trips=async(token,date,from,to)=>{
  
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.get(
        `http://63.142.252.251/transportation-test/web/index.php/v1/routing/planned?start=${from}&end=${to}&date=${date}`,
       config
      );
      return response;
}
export const seats=async(token,start,end,date,time,route)=>{
  
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.post(
        `http://63.142.252.251/transportation-test/web/index.php/v1/tickets/free-seats?detailed=1`,
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