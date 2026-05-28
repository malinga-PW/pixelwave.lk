import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
return ( <footer className="footer footer-style-one pt-145"> <div className="container">

```
    <div style={{ textAlign: "center", padding: "60px 0" }}>

      <h2>PixelWave Total Solution</h2>

      <p style={{ marginTop: "20px" }}>
        AI + Human Powered Business Growth Solutions
      </p>

      <p>
        Email: hello@pixelwave.lk
      </p>

      <p>
        Phone: +94 71 973 973 4
      </p>

      <p>
        Mulleriyawa, Sri Lanka
      </p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/service">Services</Link>
        {" | "}
        <Link to="/contact">Contact</Link>
      </div>

      <p style={{ marginTop: "30px" }}>
        Copyright © 2026 PixelWave Total Solution.
        All Rights Reserved.
      </p>

    </div>

  </div>
</footer>
```

);
};

export default Footer;
