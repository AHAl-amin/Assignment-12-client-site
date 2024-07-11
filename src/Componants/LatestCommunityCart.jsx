import { useState } from "react";



const LatestCommunityCart = ({item}) => {
    const [vote, setVote] = useState(0)
    const {_id,FuramImage,title } = item;
    const handlevote = () => {
       
       if(vote === 1){
        setVote(0)
       }
       else {
        setVote(1)
       }
    }
    return (
        <div >
           
        <div className="card w-full h-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={FuramImage} alt="Shoes" className="rounded-xl w-full h-[250px]" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title font-extrabold">{title}</h2>
              
                <button onClick={handlevote} className="text-xl btn font-bolde bg-gray-400 btn-gost">Vote: {vote} </button>
                
            </div>
        </div>

    </div>
    );
};

export default LatestCommunityCart;