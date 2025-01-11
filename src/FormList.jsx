import React, { useEffect, useState } from "react";
import axios from "axios";

const FormList = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getForms");
        setForms(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchForms();
  }, []);

  return (
    <div>
      <h2>Submitted Forms</h2>
      {forms.map((form) => (
        <div key={form._id}>
          <h3>{form.name}</h3>
          <p>{form.details}</p>
          <img
            src={`http://localhost:5000/uploads/${form.image}`}
            alt={form.name}
            style={{ width: "350px", height: "300px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default FormList;
