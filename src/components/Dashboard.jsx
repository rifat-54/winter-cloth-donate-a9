import React, { useContext, useState } from "react";
import { authContex } from "../Routes/AuthProvider";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { user, updateUser } = useContext(authContex);

//   console.log(user);

  const [update, setUpdate] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        // console.log(name,photo)

    updateUser(name,photo)
    .then(()=>{
        toast.success("SuccessFully Update");
    setUpdate(false);
    })

    
  };

  return (
    <>
      <div className="card bg-base-100 max-w-96 mx-auto mt-5 shadow-xl">
        <figure>
          <img className="rounded-lg" src={user?.photoURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {user?.displayName}</h2>
          <p className="my-5">Email: {user?.email}</p>
          <div className="card-actions justify-center">
            <button onClick={() => setUpdate(true)} className="btn btn-primary">
              Update Profile
            </button>
          </div>
        </div>
      </div>
      {update && (
        <form onSubmit={handleUpdate} className="mx-auto py-10 rounded-lg mt-20 bg-base-100 max-w-96 shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-6">Fill Up</h2>
          <div className="w-11/12 flex items-center justify-center gap-4 mx-auto">
            <p className="text-xl font-bold">Name: </p>
            <input
            name="name"
              className="input input-bordered input-accent w-full max-w-xs"
              type="text"
              placeholder="name"
            />
          </div>
          <div className="w-11/12 mt-5 flex items-center justify-center gap-4 mx-auto">
            <p className="text-xl font-bold">Photo: </p>
            <input
            name="photo"
              className="input input-bordered input-accent w-full max-w-xs"
              type="text"
              placeholder="Photo URL"
            />
          </div>
          <button
            
            className="btn btn-primary text-center mx-auto mt-5 block"
          >
            Update
          </button>
        </form>
      )}
    </>
  );
};

export default Dashboard;
