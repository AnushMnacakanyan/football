import { Stadium } from "@/type";
import axios from "axios";
import Link from "next/link";

export default function Stadiums({ stadiums }: { stadiums: Stadium[] }) {
    return (<div className="div5">
        <table className="table table-bordered" > 
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>See Stadiums</th>
                    <th>IMG</th>
                </tr>
            </thead>
            <tbody>
                {
                    stadiums.map(elm=>{
                        return(<tr key={elm.id}>
                            <td>{elm.name}</td>
                            <td>{elm.city}</td>
                            <td><Link href={"/foot/"+elm.id}>See Stadiums</Link></td>
                            <td><img src={elm.image} alt="" width={100} /> </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>

    </div>)
}
export const getStaticProps = async () => {
    const { data } = await axios.get("https://myfakeapi.com/api/football/stadiums")
    console.log("===>", data);
    return {
      props: {
        stadiums: data.stadiums
      }
    }
  
  }
