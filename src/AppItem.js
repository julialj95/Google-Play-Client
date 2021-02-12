import React from "react";

function AppItem(props) {
  return (
    <div className="appItem">
      <h3>App Name: {props.app}</h3>
      <p>Category: {props.category}</p>
      <p>Rating: {props.rating}</p>
      <p>Reviews: {props.reviews}</p>
      <p>Size: {props.size}</p>
      <p>Installs {props.installs}</p>
      <p>Type: {props.type}</p>
      <p>Price: {props.price}</p>
      <p>Content Rating: {props.contentRating}</p>
      <p>Genres: {props.genres}</p>
      <p>Last Updated: {props.lastUpdated}</p>
      <p>Current Version: {props.currentVersion}</p>
      <p>Android Version: {props.androidVersion}</p>
      <br />
    </div>
  );
}

export default AppItem;
