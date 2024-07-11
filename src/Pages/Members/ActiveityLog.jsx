import { ToastContainer, toast } from "react-toastify";

const ActiveityLog = () => {
    const handlesubmit = () => {
        toast.success('applied succesfully')
    }
  return (
    <div className="m-10">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>I want to trainer</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">

    <button onClick={handlesubmit} className="btn btn-gost" >Yes</button>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
        
      </form>
    </div>
  </div>
</dialog>
      <ToastContainer/>
    </div>
  );
};

export default ActiveityLog;
