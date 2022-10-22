import React, { Component } from "react";
import AddToBag from "./add_to_bag";


export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <div className="hide-in-webview">
      <AddToBag />
    </div>
  </footer>
);
