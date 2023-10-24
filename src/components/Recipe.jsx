import ketosalad from "../assets/images/ketosalad.png"
const Recipe = () =>{
    return(
        <>
        <div className="md:grid md:py-4 md:px-10 pl-[12px] pr-[12px] py-5 ">
            <div>
                <h2 className="text-[26px] font-semibold">Healthy Recipes</h2>
            </div>
            <div className="flex justify-between ">
                <h3 className="text-[#F6B100] font-[20px]">with Features</h3>
                <h5 className="text-[15px] text-[#9F9F9F]">see all</h5>
            </div>
            <div className="flex pt-[30px] justify-between  ">
             <span className="grid md:w-[200px] h-[240px] shadow-2xl rounded-2xl rounded-t-[100px] w-180px pr-[20px]">
                <img className="h-[170px] pl-[13px]" src={ketosalad}/>
                <h4 className="text-[18px] font-semibold text-left ml-[10px]">ketosalad</h4>
                <h5 className="text-[13px] font-thin text-left ml-[10px] py-[10px]">Beans & fruits</h5>
             </span> 
            <span className="grid md:w-[200px] h-[240px] shadow-2xl rounded-2xl rounded-t-[100px] w-180px pr-[20px]">
                <img className="h-[170px] pl-[13px]" src={ketosalad}/>
                <h4 className="text-[18px] font-semibold text-left ml-[10px]">ketosalad</h4>
                <h5 className="text-[13px] font-thin text-left ml-[10px] py-[10px]">Beans & fruits</h5>
            </span> 
            <span className="md:grid md:w-[200px] md:h-[240px] md:shadow-2xl md:rounded-2xl md:rounded-t-[100px] hidden">
                <img className="h-[170px] pl-[13px]" src={ketosalad}/>
                <h4 className="text-[18px] font-semibold text-left ml-[10px]">ketosalad</h4>
                <h5 className="text-[13px] font-thin text-left ml-[10px] py-[10px]">Beans & fruits</h5>
            </span> 
            <span className="md:grid md:w-[200px] md:h-[240px] md:shadow-2xl md:rounded-2xl md:rounded-t-[100px] hidden">
                <img className="h-[170px] pl-[13px]" src={ketosalad}/>
                <h4 className="text-[18px] font-semibold text-left ml-[10px]">ketosalad</h4>
                <h5 className="text-[13px] font-thin text-left ml-[10px] py-[10px]">Beans & fruits</h5>
            </span> 
            <span className="md:grid md:w-[200px] md:h-[240px] md:shadow-2xl md:rounded-2xl md:rounded-t-[100px] hidden">
                <img className="h-[170px] pl-[13px]" src={ketosalad}/>
                <h4 className="text-[18px] font-semibold text-left ml-[10px]">ketosalad</h4>
                <h5 className="text-[13px] font-thin text-left ml-[10px] py-[10px]">Beans & fruits</h5>
            </span> 
            </div>
        </div>
        </>
    )
};
export default Recipe;