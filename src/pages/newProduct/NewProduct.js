import React from "react";
import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New User</h1>
      <form className="newProductForm">
        <div className="newProductItem">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newProductItem">
          <label htmlFor="">Full name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newProductItem">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newProductItem">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="John" />
        </div>
        <div className="newProductItem">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="+1 123 456 67" />
        </div>
        <div className="newProductItem">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newProductItem">
          <label htmlFor="">Gender</label>
          <div className="newProductGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">female</label>
          </div>
        </div>
        <div className="newProductItem">
          <label htmlFor="">Active</label>
          <select className="newProductSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newProductButton">Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
