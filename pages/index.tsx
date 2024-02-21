import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { Team } from "@/type";
import { useState } from "react";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function Home({ teams }: { teams: Team[] }) {
  console.log(teams);

  return (<div className="div4">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>FifaCode</th>
          <th>Emoji</th>
          <th>See Team</th>
          <th>IMG</th>
        </tr>
      </thead>
      <tbody>
        {teams.map(elm=>{
          return(<tr key={elm.id}>
            <td>{elm.name}</td>
            <td>{elm.fifaCode}</td>
            <td>{elm.emoji}</td>
            <td className="td">
              <Link href={"/teams/"+ elm.id}>See Team</Link>
            </td>
            <td><img src={elm.flag} alt="" width={100} /></td>
          </tr>)
        })}
      </tbody>
    </table>


  </div>);
}


export const getStaticProps = async () => {
  const { data } = await axios.get("https://myfakeapi.com/api/football/teams")
  console.log("===>", data);
  return {
    props: {
      teams: data.Teams
    }
  }

}
