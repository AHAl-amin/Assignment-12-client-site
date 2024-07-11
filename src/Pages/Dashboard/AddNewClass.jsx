import Swal from "sweetalert2";


const AddNewClass = () => {
    const handleaddAnewClasses = e => {
        e.preventDefault();
        const form = e.target;
        const classesName=form.classesName.value;
        const image = form.image.value;
        const dettails =form.dettails.value;

        
        
       
   
        
       
       
        
       
       



        const AddClasses = {classesName,image,dettails
            
        }
        console.log(AddClasses)

       


        // send data to the server

     
        fetch('http://localhost:5000/addclasses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddClasses)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added new classes',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }
    return (
        <div>
           <div className="bg-orange-400 rounded-lg p-4 my-8 lg:w-3/5 mx-auto">
                    <h2 className="text-4xl text-center font-bold my-4 ">
                     Add a new classes
                    </h2>
                    <form onSubmit={handleaddAnewClasses} className=" p-2">
                        <div className="grid grid-cols-1  gap-6">

                          
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">	Classes Name</span>

                                </div>
                                <input type="text" name='classesName' placeholder=" classes Name" className="input input-bordered w-full " required />

                            </label>
                          
                           

                          
                        

                           
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Dettails</span>

                                </div>
                                <input type="text" name='dettails' placeholder=" Dettails" className="input input-bordered w-full "
                                    required />

                            </label>
                           
                            
                            
                         <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text"> Image </span>

                                </div>
                                <input type="text" name='image' placeholder="image" className="input input-bordered w-full "
                                    required />

                            </label>
                          
                        </div>
                        <div>
                            <label className="form-control w-full ">

                                <input className="input input-bordered w-full bg-gray-400 my-10" type="submit" value="Submit" />

                            </label>
                        </div>

                    </form>

                </div>
        </div>
    );
};

export default AddNewClass;