import React from "react";
import { Helmet } from "react-helmet";

const C_ContentDetail = props => (
  <div className="container">
    <Helmet>
      <title>Detail</title>
    </Helmet>
    <h1>Content Detail {props.match.params.id}</h1>
  </div>
);

export default C_ContentDetail;
