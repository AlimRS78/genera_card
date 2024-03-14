import "./CardForm.css";
import { useState } from "react";

export default function CardForm({ addCity }) {

    const [formData, setFormData] = useState({
        id: Math.random(),
        name: "",
        description: "",
        imgURL: "",
        isVisited: false
    })
    
    const handleInputChange = (event) => {
        const {name, value, type, checked} = event.target
        const inputValue = type == "checkbox" ? checked : value
        setFormData({
            ...formData,
            [name]: inputValue
        })
    }
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const city = {
      title: formData.name,
      url: formData.imgURL,
      description: formData.description,
      isVisited: formData.isVisited,
    };
    addCity(city)};
  return (
    <>
      <form id="form" action="" onSubmit={handleSubmit}>
        <label for="title">Title :</label>
        <input id="title" name="name" type="text" value={formData.name} onChange={handleInputChange}/>
        <label for="url">Image Link :</label>
        <input id="url" type="text" name="imgURL" value={formData.imgURL} onChange={handleInputChange}/>
        <label for="description">Description :</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleInputChange}/>
        <div id="checkBox">
          <label for="checkbox">Visitato? :</label>
          <input name="isVisited" type="checkbox" checked={formData.isVisited} onChange={handleInputChange}/>
        </div>
        <button type="submit">Add City</button>
      </form>
    </>
  );
}
