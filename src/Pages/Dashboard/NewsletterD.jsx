
import axios from "axios";
import {  useState } from "react";

import SectionsTitle from "../../Componants/SectionsTitle";


const NewsletterD = () => {
    // const newsletter = useLoaderData();
    // console.log(newsletter)
    const [newsletters, setNewsletter] = useState([]);
    axios.get('http://localhost:5000/subscriber')
    .then(res => {

        // console.log(res.data)
       
        setNewsletter(res?.data)

    })

    return (
        <div>
            <SectionsTitle
            heading={"newsletter"}>

            </SectionsTitle>
             <div className="overflow-x-auto">
                <table className="table  border-2 border-gray-600 rounded-xl w-4/5 p-10 mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            Serial Number
                            </th>
                            <th>Name</th>
                            <th>  Email</th>
                            
                          
                        </tr>
                    </thead>
                    <tbody>
                      
                     {
                        newsletters.map((newsletter,index) => <tr key={newsletter._id}>
                            <td>{index + 1} </td>
                            <td>{newsletter?.name}</td>
                            <td>{newsletter?.email}</td>
                           </tr>
                           )
                     }
                    </tbody>
                    {/* foot */}
               

                </table>
            </div>
        </div>
    );
};

export default NewsletterD;