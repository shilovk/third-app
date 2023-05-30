import React, { Children } from "react";
import { createRoot } from "react-dom/client";

const Segment = ({ children, dashed, color }) => (
  <div style={{ border: `1px ${dashed ? "dashed" : "solid" } ${color}` }}>
    {/*{console.log(children) || children}*/}
    {Children.map(
      children,
      (child, key) => (
        <div key={key} style={{ border: "1px solid red" }}>
          {child}
        </div>
      )
    )}
    {Children.count(children)}
    {/*{Children.only(children)}*/}
  </div>
);

Segment.defaultProps = {
  color: "black"
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Segment dashed>
    <div>First</div>
    <div>Second</div>
    {() => <div>Third</div>}
  </Segment>
);
