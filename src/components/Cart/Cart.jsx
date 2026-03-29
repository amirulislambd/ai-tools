import React from "react";

const Cart = ({ getModel,setGetModel }) => {
  const total = getModel.reduce((sum, current) => sum + current.price, 0);

  const handleDeleteAll =()=>{
    setGetModel([])
  }
const handleDelete=(item)=>{
    const filterArr = getModel.filter(i=> i.id !==item.id)
    setGetModel(filterArr)
}
  console.log(total);
  return (
    <div className="max-w-7xl mx-auto">
      {getModel.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <h1>No Model</h1>
          <p>Please Select your model</p>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-2xl font-bold text-center my-5">
              Your Model ({getModel.length})
            </h1>
          </div>
          <div className="grid gap-2 md:gap-3.5">
            {getModel.map((item, i) => (
              <div key={i}>
                <div className="border flex items-center justify-between p-4 rounded-xl border-zinc-200">
                  <img className="w-16" src={item.image} alt="" />
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="text-2xl font-bold inline-flex">
                    ${item.price}{" "}
                    <span className="hidden md:block">/month</span>{" "}
                  </p>
                  <button onClick={()=>handleDelete(item)} className="text-2xl btn btn-circle">x</button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between bg-black text-white rounded-lg p-4 my-2 md:my-5">
              <h1 className="text-2xl font-bold">Total</h1>
              <p className="text-2xl font-bold">${total}</p>

            </div>
          </div>
            <button onClick={handleDeleteAll} className="btn btn-xl w-full  bg-red-500 text-white rounded-xl text-2xl mb-5">Prosed To CheckOut</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
