import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh]">

      <div className="font-bold flex  text-4xl justify-center items-center">Buy Me a Chai <span><img className="invertImg" src="https://github.com/CodeWithHarry/Sigma-Web-Dev-Course/blob/main/Video%20131/public/tea.gif?raw=true" width={90} alt="" /> </span></div>
      <p>
        Turn gratitude into action — buy a chai, support a creator, and help fuel the passion behind every project, one meaningful sip at a time.
      </p>

      <div>
        <Link href={"/login"}>
        <button type="button" className="cursor-pointer text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
        </Link>
        
        <Link href={"/about"}>
        <button type="button" className="cursor-pointer text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More....</button>
        </Link>
      </div>


    </div>
      <div className="bg-white h-1 opacity-15">
      </div>

      <div className="text-white container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center my-14"> Support your favorite creators by buying them a chai - small sips, big impact.</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-2 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black flex flex-col items-center justify-center" width={90} src="https://github.com/CodeWithHarry/Sigma-Web-Dev-Course/blob/main/Video%20131/public/man.gif?raw=true" alt="" />
            <p className="font-bold text-center w-3/4">Code. Chai. Create.  <br/> A moment of calm. A sip of support.   </p>
          </div>
          <div className="item space-y-2 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={90} src="https://github.com/CodeWithHarry/Sigma-Web-Dev-Course/blob/main/Video%20131/public/coin.gif?raw=true" alt="" />
            <p className="font-bold text-center">Coins of Gratitude. <br/> Your Support Makes Magic Happen.</p>
          </div>
          <div className="item space-y-2 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={90} src="https://github.com/CodeWithHarry/Sigma-Web-Dev-Course/blob/main/Video%20131/public/group.gif?raw=true" alt="" />
            <p className="font-bold text-center">Built On Community. <br/> Driven by Collective Strength.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-15 my-4">
      </div>

      <div className="text-white container mx-auto py-12 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center my-14"> Learn more about us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uyLjTt8YcWg?si=OzPowEP_1mFNV4wM" title="YouTube video player" frameBorder = "0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

    </>
  );
}
