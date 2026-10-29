import React from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisment from "./Advertisment";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";

export default function HomePage() {
  return <div className="homegae">
    <Statistics/>
    <PopularDishes/>
    <NewDishes/>
    <Advertisment/>
    <ActiveUsers/>
    <Events/>

    
  </div>;
}
