import React from "react";
import { useLocation } from "react-router-dom";

function NoMatch() {
  const location = useLocation();

  return (
    <h1>
      404 Not Found<code>{location.pathname}</code>
    </h1>
    
  );
}

export default NoMatch;