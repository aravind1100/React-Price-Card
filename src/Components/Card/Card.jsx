import React from "react";
const Card = ({ data }) => {
  return (
    <>
      <div className="row">
        {data.map((ele, ind) => {
          return (
            
              <div key={ind} className="col-12 col-md-6 col-lg-4">
                <div className="card" id={ele.title}>
                  <div className="card-header">
                    <span className="card-subtitle">{ele.title}</span>
                    <br />
                    <h2>{ele.price}</h2>
                  </div>
                  <div className="card-body">
                    <i className={ele.tickIcon}></i>
                    <span className="card-title">{ele.user}</span>
                    <br />
                    <i className={ele.tickIcon}></i>
                    <span className="card-title">{ele.storage}</span>
                    <br />
                    <i className={ele.tickIcon}></i>
                    <span className="card-title">{ele.project}</span>
                    <br />
                    <i className={ele.tickIcon}></i>
                    <span className="card-title">{ele.community}</span>
                    <br />
                    {ele.title === "FREE" ? (
                      <i className={ele.crossIcon}></i>
                    ) : (
                      <i className={ele.tickIcon}></i>
                    )}
                    {ele.title === "FREE" ? (
                      <span className={`card-title ${ele.textFade}`}>
                        {ele.private}
                      </span>
                    ) : (
                      <span className="card-title">{ele.private}</span>
                    )}
                    <br />
                    {ele.title === "FREE" ? (
                      <i className={ele.crossIcon}></i>
                    ) : (
                      <i className={ele.tickIcon}></i>
                    )}
                    {ele.title === "FREE" ? (
                      <span className={`card-title ${ele.textFade}`}>
                        {ele.support}
                      </span>
                    ) : (
                      <span className="card-title">{ele.support}</span>
                    )}
                    <br />
                    {ele.title === "FREE" ? (
                      <i className={ele.crossIcon}></i>
                    ) : (
                      <i className={ele.tickIcon}></i>
                    )}
                    {ele.title === "FREE" ? (
                      <span className={`card-title ${ele.textFade}`}>
                        {ele.subDomain}
                      </span>
                    ) : (
                      <span className="card-title">{ele.subDomain}</span>
                    )}
                    <br />
                    {ele.title === "PRO" ? (
                      <i className={ele.tickIcon}></i>
                    ) : (
                      <i className={ele.crossIcon}></i>
                    )}
                    {ele.title === "PRO" ? (
                      <span className="card-title">{ele.reports}</span>
                    ) : (
                      <span className={`card-title ${ele.textFade}`}>
                        {ele.reports}
                      </span>
                    )}
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary w-100">BUTTON</button>
                  </div>
                </div>
              </div>
            
          );
        })}
      </div>
    </>
  );
};

export default Card;
