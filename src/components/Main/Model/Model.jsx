import React, { useState } from "react";

const Model = ({ model,getModel, setGetModel }) => {
  const [isSubscribe, setIsSubscribe] = useState("");

  const handleSubscribe=()=>{
    setIsSubscribe("subscribe")
    setGetModel([...getModel,model])
  }

  return (
    <div className="border border-zinc-200 rounded-xl overflow-hidden shadow-lg">
      <div className="flex justify-center items-center  bg-zinc-200  h-57">
        <div className="relative">
          <img
            className="w-40 h-40 object-contain transition-transform duration-700 hover:scale-125"
            src={model.image}
            alt={model.image}
          />
          <p className="absolute top-0 -right-14 inline-flex border border-red-500 px-2 rounded-full bg-red-400 text-white">
            {model.status}
          </p>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-2xl font-bold">{model.title}</h2>
        <p>{model.description}</p>
        <p className="text-2xl font-bold">Price: ${model.price}</p>

        <button
          onClick={handleSubscribe}
          className="btn w-full bg-red-500 text-white rounded-full mb-5"
        >
          {isSubscribe === "subscribe" ? "Subscribe" : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
};

export default Model;
