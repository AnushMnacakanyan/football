import { TVChannel } from "@/type";
import axios from "axios";

export default function See({tvchannel}:{tvchannel:TVChannel}){
    return(<div className="div7">
      <div className="div8">
      <h2 className="h2">See Tv_Channels </h2>
        <img src={tvchannel?.icon} alt="" width={200} />
        <h3>{tvchannel?.name}</h3>
        <h4>{tvchannel?.country}</h4>
        <p>{tvchannel?.iso2}</p>
        <p>{tvchannel?.lang?.map(elm=>{return(<p>{elm}</p>)})}</p>

      </div>
    </div>)
}
export const getServerSideProps = async ({params}:any) => {
  const { data } = await axios.get("https://myfakeapi.com/api/football/tvchannels/"+params.id)
  console.log("===>", data);
  return {
    props: {
      tvchannel: data.tvchannel
    }
  }
}