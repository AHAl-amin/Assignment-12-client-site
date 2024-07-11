import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import LatestCommunityCart from "../Componants/LatestCommunityCart";
import SectionsTitle from "../Componants/SectionsTitle";


const Community = () => {
  
  const axiosPublic = useAxiosPublic();
  const { data: communityData = [] } = useQuery({
    queryKey: ["addAnewFuram"],
    queryFn: async () => {
      const res = await axiosPublic.get("/addAnewFuram");
      console.log(res);
      return res.data;
    },
  });
  console.log(communityData.length);
  return (
    <div>
      <SectionsTitle heading={"Latest community"}></SectionsTitle>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {communityData?.slice(0, 6).map((latestCommu) => (
            <LatestCommunityCart
              key={latestCommu._id}
              item={latestCommu}
            ></LatestCommunityCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
