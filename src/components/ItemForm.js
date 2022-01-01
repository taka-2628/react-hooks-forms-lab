import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formData, setFormData] = useState({
    id: uuid(), 
    name: "", 
    category: "Produce",
  })
  
  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value
    
    setFormData({
      ...formData, 
      [name]: value, 
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate an unique id
      name: formData.name,
      category: formData.category
    };
    
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formData.value}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
