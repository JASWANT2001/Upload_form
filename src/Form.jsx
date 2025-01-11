import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("details", details);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/submitForm", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Form submitted successfully");
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Details:</label>
        <input
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Upload Image:</label>
        <input type="file" onChange={handleFileChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
