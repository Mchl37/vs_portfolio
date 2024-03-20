import { Alice } from "next/font/google";

const alice = Alice({ subsets: ["latin"], weight: "400" });

function TopBar() {
  return (
    <div className="topBar">
      <div className="squareButtons">
        <div className="redSquareButton"></div>
        <div className="yellowSquareButton"></div>
        <div className="greenSquareButton"></div>
      </div>
      <h1 className={ alice.className }>Visuale Studio Codex <span>(c&apos;est du latin)</span></h1>
    </div>
  )
}

export default TopBar;
