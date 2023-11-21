import Link from "next/link";
import Image from "next/image";

const ProjectsCard = () =>{
    return (
<div> 
    <div className="text-white bg-gray-700 lg:w-[300px] lg:h-[400px] rounded-lg" >
        <Image src="/assets/Card01.png" height={300} width={470} className="p-[5px] rounded-lg"/>
        <Link href="https://jurgenhideni.vercel.app" ><h1 className="text-[2.5rem] text-center font-bold">Portfolio </h1></Link>
     </div>
</div>
       
    )
}

export default ProjectsCard