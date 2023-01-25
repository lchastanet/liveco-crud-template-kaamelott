import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddKnight() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const navigate = useNavigate();

  const handleNameField = (e) => {
    setName(e.target.value);
  };

  const handleAgeField = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 3 || (age < 0 && age > 130)) {
      alert("Valeurs incorrects");
    } else {
      axios
        .post("http://localhost:8000/knights", { name, age })
        .then(() => {
          navigate("/");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleNameField}
        value={name}
        type="text"
        name="name"
        id="name"
      />
      <input
        onChange={handleAgeField}
        value={age}
        type="number"
        name="age"
        id="age"
      />
      <input type="submit" value="Créer" />
    </form>
  );
}

export default AddKnight;
