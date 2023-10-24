import ellipse from "../assets/images/ellipse.png";
import Heart from "../assets/images/Heart.png";
import bitmap from "../assets/images/bitmap.png";
import vect from "../assets/images/vect.png"
import Mask from "../assets/images/Mask.png"
const Comments = () =>{
    return(
        <>
        <h2 className="py-4 px-10">Comments (45)</h2>
        <div className="pl-[30px] border-b pb-[30px] ">
            <span className="flex align-center justify-between">
               <span className="flex"> <img className="rounded-[100px]" src={bitmap} alt="" />
                <h3 className="flex text-[#181A20] text-[20px] pl-[30px]">Richard Flynn</h3></span>
                <img className="self-end" src={vect} alt="" />
            </span>
            <h2>Loving this recipe! So many delicious recipes to choose from...</h2>
            <span className="flex">
                <img className="pr-[10px]" src={Heart} alt="" srcset="" />
                <h3 className="pr-[10px]">65</h3>
                <h3 className="flex ">1 <span>month ago</span></h3>
            </span>
        </div>

        <div className="pl-[30px] border-b pb-[20pt] ">
            <span className="flex align-center justify-between">
               <span className="flex"> <img className="rounded-[100px]" src={Mask} alt="" />
                <h3 className="flex text-[#181A20] text-[20px] pl-[30px]">Mitchell Oconnor</h3></span>
                <img className="self-end" src={vect} alt="" />
            </span>
            <h2>Loving this recipe! So many delicious recipes to choose from...</h2>
            <span className="flex">
                <img className="pr-[10px]" src={Heart} alt="" srcset="" />
                <h3 className="pr-[10px]">65</h3>
                <h3 className="flex ">1 <span>month ago</span></h3>
            </span>
        </div>

        <div className="pl-[30px] border-b pb-[20pt] ">
            <span className="flex align-center justify-between">
               <span className="flex"> <img className="rounded-[100px]" src={ellipse} alt="" />
                <h3 className="flex text-[#181A20] text-[20px] pl-[30px]">Finnegan Ortega</h3></span>
                <img className="self-end" src={vect} alt="" />
            </span>
            <h2>Loving this recipe! So many delicious recipes to choose from...</h2>
            <span className="flex">
                <img className="pr-[10px]" src={Heart} alt="" srcset="" />
                <h3 className="pr-[10px]">65</h3>
                <h3 className="flex ">1 <span>month ago</span></h3>
            </span>
        </div>
        </>
    )
};
export default Comments