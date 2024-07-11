import Swal from "sweetalert2";

const AddNewFuram = () => {
  const handleaddAnewFuram = (e) => {
    e.preventDefault();
    const form = e.target;
    const FuramImage = form.FuramImage.value;
   
    const title = form.title.value;
    const addAnewFuram = { FuramImage, title };
    console.log(addAnewFuram);

    // send data to the server

    fetch("http://localhost:5000/addAnewFuram", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addAnewFuram),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added new Forum",
            icon: "Success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-orange-400 rounded-lg p-4 my-8 lg:w-3/5 mx-auto">
      <h2 className="text-4xl text-center font-bold my-4 ">
        Add a new Furam
      </h2>
      <form onSubmit={handleaddAnewFuram} className=" p-2">
        <div className="grid grid-cols-1  gap-6">
         

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">title</span>
            </div>
            <input
              type="text"
              name="title"
              placeholder=" title"
              className="input input-bordered w-full "
              required
            />
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Furam Image </span>
            </div>
            <input
              type="text"
              name="FuramImage"
              placeholder="image"
              className="input input-bordered w-full "
              required
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full ">
            <input
              className="input input-bordered w-full bg-gray-400 my-10"
              type="submit"
              value="Add Forum"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddNewFuram;
