import { Stadium } from "@/type";
import axios from "axios";

export default function SeeStadiums({ stadium }: { stadium: Stadium }) {
  return (<div className="div7">
    <div className="div8">
      <h2 className="h2">See Stadium </h2>
      <img src={stadium?.image} alt="" width={200} />
      <h3>{stadium?.name}</h3>
      <p>{stadium?.city}</p>
      <p>{stadium?.lat}</p>
      <p>{stadium?.lng}</p>
    </div>
  </div>)
}
export const getServerSideProps = async ({ params }: any) => {
  const { data } = await axios.get("https://myfakeapi.com/api/football/stadiums/" + params.id)
  console.log("===>", data);
  return {
    props: {
      stadium: data.stadium
    }
  }
}

