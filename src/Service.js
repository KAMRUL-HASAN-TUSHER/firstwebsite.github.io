import React from "react";
import Card from "./Card";
import Sobi from "./Sobi";




const Service = () => {




    return(
      <>
      <div className="my-5">
        <h1 className="text-center">our services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
          <div className="row">
         
           {
            Sobi.map((val,ind) => {
              return <Card 
                imgsrc = {val.imgsrc}
                title = {val.title}
                key={ind}
              />
            })
           }
          </div>

          </div>
        </div>
      </div>
      </>
    )
   };
  
  export default Service;