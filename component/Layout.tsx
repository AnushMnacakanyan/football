import Link from "next/link"

export const Layout = ({ children }: any) => {
    return (<div className="div1">
        <div>
            <ul className="ul">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/foot/stadiums"}>Stadiums</Link></li>
                <li><Link href={"/ball/tvchannels"}>Tv_Channels</Link></li>
            </ul>

        </div>
        <div className="div3">
            <h1 >SOCCER</h1>
            <h1>I'm Love This Game</h1>
            <h3>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ipsum dolor sit amet conse ctetur adipisicing</h3>
        </div>

        {children}

    </div>)
}