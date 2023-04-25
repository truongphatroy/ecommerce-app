import React from "react";
import classes from "./";

const Footer = () => {
  return (
    <div>
      <table class='table table-borderless'>
        <thead>
          <tr>
            <th scope='col'>First</th>
            <th scope='col'>Last</th>
            <th scope='col'>Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat1</td>
          </tr>
          <tr>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Footer;
