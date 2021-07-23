const InputForm = () => {

  return (
    <div className="formContainer">
      <h1>Camping Checklist</h1>
      <label htmlFor="newItemName">Item Name</label>
      <input 
        type="text" 
        id="newItemName" 
        // onChange = {handleChange}
        // value={userInput}
      />
      <label htmlFor="newItemQuantity">Quantity</label>
      <input 
        type="text" 
        id="newItemQuantity" 
        // onChange = {handleChange}
        // value={userInput}
      />
      <label htmlFor="newItemCategory">Category</label>
      <input 
        type="text" 
        id="newItemCategory" 
        // onChange = {handleChange}
        // value={userInput}
      />
      <button type='submit'>Add</button>
    </div>
  )
}

export default InputForm;