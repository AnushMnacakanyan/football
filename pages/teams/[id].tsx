import { Team } from "@/type";
import axios from "axios"

export default function SeeTeams({ team }: { team: Team }) {
    console.log(team);
    
    return (<div className="div7">
      <div className="div8">
        <h2 className="h2">See Team </h2>
            <img src={team?.flag} alt="" width={200} />
            <h3>{team?.name}</h3>
            <p>{team?.fifaCode}</p>
            <p>{team?.emoji}</p>
            <p>{team?.emojiString}</p>
            <p>{team?.iso2}</p>
      </div>
     
    </div>)
}

export const getServerSideProps = async ({params}:any) => {
    const { data } = await axios.get("https://myfakeapi.com/api/football/teams/"+params.id)
    console.log("===>", data);
    return {
      props: {
        team: data.Team
      }
    }
  }

  