import axios from "axios";
export const approve=async(id,token)=>{
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.get(
        `http://63.142.252.251/transportation-test/web/index.php/v1/tickets/pay-booking?id=${id}&pos=IN123456`,
       config
      );
      return response;
    
}
export const ticket=async(token,start,end,date,time,route,seat)=>{
    const body={

        "start":start,
        "end":end,
        "date": date,
        "time":time, 
        "route": route,
        "currency":"RWF",
        "discount": "0",
        "pos": "IN123456",
        "ticket_serial":"mobile",
        "seat":seat,
       "customer": {"number":"07851082","name":"MUZIMA","passport":"P1234", "from_nation":"Rwanda","to_nation":"Rwanda","nationality":"Tanzanian","gender":"1","age":"21"}
}
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.post(
        `http://63.142.252.251/transportation-test/web/index.php/v1/tickets/mobile-tickets`,body,
       config
      );
      return response;
}
export const seats=async(token,start,end,date,time,route)=>{
    const body={"start":start,"end":end,"date":date,"time":time,"route":route,"currency":"RWF","pos":"IN123456"
}
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.post(
        `http://63.142.252.251/transportation-test/web/index.php/v1/tickets/free-seats?detailed=1`,body,
       config
      );
      return response;
}
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