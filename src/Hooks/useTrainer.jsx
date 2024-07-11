import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSequre from "./useAxiosSequre";
import { useQuery } from "@tanstack/react-query";


const useTrainer = () => {
    const {user, loading} = useContext(AuthContext);
    const axiosSecure = useAxiosSequre();
 const {data: isTrainer, isPending: isTrainerLoadin} = useQuery({
    queryKey: [user?.email, 'isTrainer'],
    enabled: !loading,
    queryFn: async() => {
         //  console.log('askign or cheking is admin', user);
          const res = await axiosSecure.get(`users/trainer/${user.email}`);
          console.log(res.data);
          return res.data?.trainer;
    }
 })
 return [isTrainer, isTrainerLoadin]
};

export default useTrainer;