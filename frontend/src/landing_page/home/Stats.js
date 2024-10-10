import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Believe wholeheartedly in</h1>
          <h2 className="fs-4">Built on Trust, Focused on You</h2>
          <p className="text-muted">
          Our aim is to build your trust and become your preferred investment platform.
          </p>
          <h2 className="fs-4">No Spam, Just Simplicity</h2>
          <p className="text-muted">
          No gimmicks, no spam, no distractions. We’re committed to providing a clean, user-friendly platform.
          </p>
          <h2 className="fs-4">Shaping the Future of Finance</h2>
          <p className="text-muted">
          Our goal is to provide you with innovative financial tools and services to help you reach your financial goals.
          </p>
          <h2 className="fs-4">Helping You Make Smarter Moves</h2>
          <p className="text-muted">
          we’re here to help you start investing smartly and confidently, right from the beginning.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "90%" }} />
          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
