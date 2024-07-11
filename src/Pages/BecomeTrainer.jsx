
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const BecomeTrainer = () => {

    const { user } = useContext(AuthContext);
    console.log(user?.photoURL);
    console.log(user?.displayName);

    const handleTrainer = e => {
        e.preventDefault();
        const form = e.target;
        
        const email = user?.email;
        const userName = user?.displayName;
        const profileImage = user?.photoURL;
        const age=form.age.value;
        const skils=form.skils.value;
   
        const availableSlots = form.availableSlots.value;
        const price = form.price.value;
        const yearsOfExperience = form.yearsOfExperience.value;
        const about = form.about.value;
        // const profileImage = form.profileImage.value;
        const classes=form.classes.value;
        const packages=form.packages.value;
        const availableDays=form.availableDays.value;
        const availableTime=form.availableTime.value;
        const description=form.description.value;



        const trainerInfo = {email,skils,  profileImage, age, yearsOfExperience, availableSlots ,about, userName,price,classes ,packages,availableTime,availableDays,description
            
        }
        console.log(trainerInfo)

       


        // send data to the server

     
        fetch('http://localhost:5000/alltrainer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(trainerInfo)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Become a trainer',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }

    return (
        <div>
            <Helmet>
                <title>fitnessPal/Become trainer</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">

                <div className="bg-green-400 rounded-lg p-4 my-8">
                    <h2 className="text-4xl text-center font-bold my-4">
                       Become a Trainer
                    </h2>
                    <form onSubmit={handleTrainer} className=" p-2">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">	User Name</span>

                                </div>
                                <input type="text" name='name' placeholder=" User Name" defaultValue={user?.displayName} className="input input-bordered w-full " disabled required />

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text"> Age</span>

                                </div>
                                <input type="number" name='age' placeholder=" Your Age" className="input input-bordered w-full " required />

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">User Email</span>

                                </div>
                                <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered w-full " disabled
                                    required />

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">give me your skils</span>

                                </div>
                                <input type="text" name='skils' placeholder=" your skils" className="input input-bordered w-full "  required />

                            </label>

                          
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Available Slots</span>

                                </div>
                                {/* <input type="text" name='countryName' placeholder="country name" className="input input-bordered w-full "
                        required /> */}
                                <select name='availableSlots' className="select select-bordered w-full ">
                                    <option disabled selected>Available Slots</option>
                                    <option value='Mon-Fri, 7am-10am'>Mon-Fri, 7am-10am</option>
                                    <option value='sun-thus ,6am-9am'>sun-thus ,6am-9am</option>
                                    <option value='Mon-Fri, 5pm-8pm'>Mon-Fri, 5pm-8pm</option>



                                    <option value='Mon-Wed, 6am-9am'>Mon-Wed, 6am-9am</option>
                                    <option value='Mon-Fri, 8am-11am'>Mon-Fri, 8am-11am</option>
                                    <option value='Tue-Thu, 7am-10am'>Tue-Thu, 7am-10am</option>

                                </select>


                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text"> Package</span>

                                </div>
                                <select name='packages' className="select select-bordered w-full ">
                                    <option disabled selected>Package  </option>
                                    <option value='Basic Membership'>Basic Membership </option>
                                    <option value='Standard Membership'>Standard Membership </option>
                                    <option value='Premium Membership'>Premium Membership</option>



                                   
                                </select>

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">About trainer</span>

                                </div>
                                <input type="text" name='about' placeholder=" About trainer" className="input input-bordered w-full "
                                    required />

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">years Of Experience</span>

                                </div>
                                <input type="text"
                                    name='yearsOfExperience' placeholder="years Of Experience" className="input input-bordered w-full "
                                    required />


                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">price</span>

                                </div>
                                <input type="text"
                                    name='price' placeholder="price" className="input input-bordered w-full "
                                    required />


                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">classes</span>

                                </div>
                                <input type="text"
                                    name='classes' placeholder="classes" className="input input-bordered w-full "
                                    required />


                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">available Time </span>

                                </div>
                                <input type="text"
                                    name='availableTime' placeholder="available Time " className="input input-bordered w-full "
                                    required />


                            </label>
                            <label className="form-control w-full ">
                            <div className="label">
                                    <span className="label-text">Available days</span>

                                </div>
                               <select name="availableDays"  className="select select-bordered w-full">
                                 <option disabled selected>Available days</option>
                                    <option value='saturday'>saturday</option>
                                    <option value='sunday'>sunday</option>
                                    <option value='Monday'>Monday</option>



                                    <option value='wednesday'>wednesday</option>
                                    <option value='Tuesday'>Tuesday</option>
                                    <option value='Thusday'>Thusday</option>
                                    <option value='Friday'>Friday</option>

                               </select>

                            </label>









                  
                        </div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Description</span>

                                </div>
                                <input type="text"
                                    name='description' placeholder="description" className="input input-bordered w-full "
                                    required />


                            </label>
                        <div>
                            <label className="form-control w-full ">

                                <input className="input input-bordered w-full bg-gray-400 my-10" type="submit" value="Applied Button" />

                            </label>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default BecomeTrainer;