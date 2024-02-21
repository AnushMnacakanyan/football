import { TVChannel } from "@/type";
import axios from "axios";
import Link from "next/link";

export default function Tvchannels({tvchannels}:{tvchannels:TVChannel[]}){
    return(<div className="div6">
        <table className="table  table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>See Tvchannels</th>
                    <th>IMG</th>
                </tr>
            </thead>
            <tbody>
                {tvchannels.map(elm=>{
                    return(<tr key={elm.id}>
                        <td>{elm.name}</td>
                        <td>{elm.country}</td>
                        <td><Link href={"/ball/"+elm.id}>See Tv_Channels</Link></td>
                        <td><img src={elm.icon} alt="" width={100} /></td>
                    </tr>)
                })} 
            </tbody>
        </table>

    </div>)
}
export const getStaticProps = async () => {
    const { data } = await axios.get("https://myfakeapi.com/api/football/tvchannels")
    console.log("===>", data);
    return {
      props: {
        tvchannels: data.tvchannels
      }
    }
  
  }
