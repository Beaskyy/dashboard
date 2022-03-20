import React from "react";
import "./product.css";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Edit product</h1>
        <Link to="/new-product">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productContainer">
        <div className="productShow">
          <div className="productShowTop">
            <img
              src="https://cdn.pixabay.com/photo/2020/03/26/10/58/norway-4970080__340.jpg"
              alt=""
              className="productShowImg"
            />
            <div className="productShowTopTitle">
              <span className="productShowproductname">Anna Becker</span>
              <span className="productShowproductTitle">Software Engineer</span>
            </div>
          </div>
          <div className="productShowBottom">
            <span className="productShowTitle">Contact Details</span>
            <div className="productShowInfo">
              <i className="bi bi-person productShowIcon"></i>
              <span className="productShowInfoTitle">annabeck99</span>
            </div>
            <div className="productShowInfo">
              <i className="bi bi-calendar productShowIcon"></i>
              <span className="productShowInfoTitle">10.12.1999</span>
            </div>
            <div className="productShowInfo">
              <i className="bi bi-phone productShowIcon"></i>
              <span className="productShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="productShowInfo">
              <i className="bi bi-envelope productShowIcon"></i>
              <span className="productShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="productShowInfo">
              <i className="bi bi-geo productShowIcon"></i>
              <span className="productShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="productUpdate">
          <div className="productUpdateTitle">Edit</div>
          <form className="productUpdateForm">
            <div className="productUpdateLeft">
              <div className="productUpdateItem">
                <label>productname</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="productUpdateInput"
                />
              </div>
              <div className="productUpdateItem">
                <label>productname</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="productUpdateInput"
                />
              </div>
              <div className="productUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="productUpdateInput"
                />
              </div>
              <div className="productUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="annabeck99@gmail.com"
                  className="productUpdateInput"
                />
              </div>
              <div className="productUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="productUpdateInput"
                />
              </div>
              <div className="productUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="productUpdateInput"
                />
              </div>
            </div>
            <div className="productUpdateRight">
              <div className="productUpdateUpload">
                <img
                  className="productUpdateImg"
                  src="https://cdn.pixabay.com/photo/2021/12/22/02/29/motherhood-6886538__340.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <i className="bi bi-box-arrow-in-down productUpdateIcon"></i>
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="productUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
