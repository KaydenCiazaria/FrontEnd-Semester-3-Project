import React from "react";
import { useNavigate } from "react-router-dom";

const Property = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Property</div>
      <div
        className="list-your-properties"
        onClick={() =>
          navigate("/headerLoggedIn/propertyAdd", {
            state: { type: "Add Property" },
          })
        }
        style={{ cursor: "pointer" }}
      >
        Add new Property
      </div>
      <div
        className="list-your-properties"
        onClick={() =>
          navigate("/headerLoggedIn/propertyEdit", {
            state: { type: "Edit Property" },
          })
        }
        style={{ cursor: "pointer" }}
      >
        Edit your Properties?
      </div>
      <div
        className="list-your-properties"
        onClick={() =>
          navigate("/headerLoggedIn/propertySchedule", {
            state: { type: "Schedule" },
          })
        }
        style={{ cursor: "pointer" }}
      >
        See your property schedule
      </div>
    </div>
  );
};

export default Property;
