
import Swal from 'sweetalert2';
import SectionsTitle from './SectionsTitle';

import { useForm } from 'react-hook-form';


const Newsletter = () => {
    const {reset} = useForm();


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        
        const name = form.name.value;
        const email = form.email.value;
        const subscriberData ={name,email}
        console.log(subscriberData)
       


       
        


        // send data to the server
        fetch('http://localhost:5000/subscriber', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(subscriberData)


        })
            .then(res => res.json())
            .then(data => {
                
                console.log(data);
                if (data.insertedId) {
                    reset();
                    Swal.fire({
                        title: 'Success!',
                        text: ' Successfully subscribe',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }

    return (
        <div>
            <div>
            <SectionsTitle
            heading={'Newsletter'}
            
            >

            </SectionsTitle>
            </div>
                     <div className='md:w-1/3 mx-auto w-full p-4 my-10'>
                     <form onSubmit={handleSubmit} action="">
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  placeholder="Your name" name='name' className="input input-bordered" required />
                           
                           
                        </div>
                      
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  placeholder="email" name='email' className="input input-bordered" required/>
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Subscriber now</button>
                        </div>
                       </form>
                     </div>
            
        </div>
    );
};

export default Newsletter;