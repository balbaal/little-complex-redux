import React from "react";
import { Helmet } from "react-helmet";

const C_About = () => (
  <div className="container">
    <Helmet>
      <title>About</title>
    </Helmet>

    <h1>About Page</h1>
    <p>
      Redux is a predictable state container for JavaScript apps. It helps you
      write applications that behave consistently, run in different environments
      (client, server, and native), and are easy to test. On top of that, it
      provides a great developer experience, such as live code editing combined
      with a time traveling debugger. You can use Redux together with React, or
      with any other view library. It is tiny (2kB, including dependencies), but
      has a large ecosystem of addons available. <br /> <br />
      Redux itself is small and unopinionated. We also have a separate package
      called redux-starter-kit, which includes some opinionated defaults that
      help you use Redux more effectively. It helps simplify a lot of common use
      cases, including store setup, creating reducers and writing immutable
      update logic, and even creating entire "slices" of state at once. Whether
      you're a brand new Redux user setting up your first project, or an
      experienced user who wants to simplify an existing application,
      redux-starter-kit can help you make your Redux code better.
    </p>
  </div>
);

export default C_About;
