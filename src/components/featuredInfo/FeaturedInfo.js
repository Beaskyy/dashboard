import React from 'react'
import './featuredInfo.css'

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,000</span>
          <span className="featuredMoneyRate">
            -11.4 <i className="bi bi-arrow-down featuredIcon negative"></i>
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,237</span>
          <span className="featuredMoneyRate">
            -1.4 <i className="bi bi-arrow-up featuredIcon negative"></i>
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,000</span>
          <span className="featuredMoneyRate">
            +2.4 <i className="bi bi-arrow-up featuredIcon"></i>
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo