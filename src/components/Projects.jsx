import ProjectsCard from "./ProjectsCard";
import "/src/app/globals.css";


const Projects = () =>{

    return (
    <div className="">
       <h1 className="text-white font-bold text-[2.5rem] p-[20px] text-center">Projects I have built so far</h1> 
    <div className="flex gap-[30px] m-[20px] justify-center">
    <ProjectsCard/>
     </div>
    </div>
      
        
       
    )
}

export default Projects 