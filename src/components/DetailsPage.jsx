import React from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const DetailsPage = () => {
  const location = useLocation();
  const {  title, image, description, division, status } = location?.state;

  const navigate=useNavigate()


  const handleSubmit=(e)=>{
    e.preventDefault();
    toast.success('Thank you ! We will reach your destination soon')
    navigate('/donation')
  }
  return (
    <div className="w-full mt-16 lg:w-11/12 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-11/12 md:w-8/12 lg:w-6/12 h-[270px] ld:h-[350px]"
          src={image}
          alt=""
        />
        <h2 className="text-2xl font-bold text-center mt-10">{title}</h2>
        <p className="text-gray-500 mt-4 text-center">{description}</p>
      </div>
      <div className="card bg-base-100 mt-10 shadow-xl">
        <form onSubmit={handleSubmit} className="card-body w-full md:w-8/12 lg:w-6/12 mx-auto">
            <h2 className="text-center text-3xl font-bold mb-6">Fill Up the form</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Quantity of items</span>
            </label>
            <input
              type="number"
              placeholder="Quantity of items"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Item type </span>
            </label>
            <select  className=" py-3 border border-gray-300 rounded-lg" name="fruits">
              <option value="apple">jacket</option>
              <option value="banana">sweater</option>
              <option value="cherry">blanket</option>
              
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Pickup location </span>
            </label>
            <input
              type="text"
              placeholder="Pickup location"
              className="input input-bordered"
           
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Additional notes </span>
            </label>
            <textarea className="border border-gray-400 rounded-lg" cols="30" rows="10"></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsPage;
