import React, { use } from "react";
import Model from "../Model/Model";

const Models = ({ responseData, getModel, setGetModel }) => {
  const data = use(responseData);
//   console.log(data);
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold ">
          Choose Your AI Model
        </h1>
        <p className="text-zinc-500">
          on subscription gives you access to all frontier ai model
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 md:mt-8">
        {data.map((model) => (
          <Model
            key={model.id}
            model={model}
            getModel={getModel}
            setGetModel={setGetModel}
          />
        ))}
      </div>
    </div>
  );
};

export default Models;
