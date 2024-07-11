import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../Hooks/useAxiosSequre";

const BokedTrainer = () => {
  const axiosSecure = useAxiosSequre();
  const { data: payment = [], refetch } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payment");
      console.log(res);
      return res.data;
    },
  });
  console.log(payment);
//   const allApplied = alltrainer.filter((item) => item.role == "trainer");
  return (
    <div>
      <div>
        <table className="table   border-gray-600 rounded-xl w-4/5 p-10 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th>Serial Number</th>

              <th> Email</th>
              <th>price</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {payment.map((trainer, index) => (
              <tr key={trainer._id}>
                <td>{index + 1} </td>

                <td>{trainer?.email}</td>
                <td>{trainer?.price}</td>
                <td>
                  <div>
                    {/* The button to open modal */}
                    <label htmlFor="my_modal_6" className="btn">
                      Review
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my_modal_6"
                      className="modal-toggle"
                    />
                  
                    <div className="modal" role="dialog">
                      <div className="modal-box">
                        <h3 className="text-lg font-bold">Your Reviwe</h3>
                        <div>
                          <form>
                          <label className="form-control w-full ">
                                <div className="label">
                                  

                                </div>
                                <input type="text" name='about' placeholder=" Your Comment" className="input input-bordered w-full "
                                    required />

                            </label>
                              <br />
                              <br />
                            <div className="rating">
                              <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                              />
                              <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked
                              />
                              <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                              />
                              <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                              />
                              <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                              />
                            </div>
                             <br />
                             <br />
                            <input type="submit" value="submit" className="btn btn-gost"/>
                          </form>
                        </div>
                        <div className="modal-action">
                          <label htmlFor="my_modal_6" className="btn">
                            Close!
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default BokedTrainer;
