import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service, handleDelete }) => {
  const { name, email, passWord,_id } = service;
  return (
    <div className="ml-10 my-3">
      <h1>Name : {name}</h1>
      <h1>Email : {email}</h1>
      <h1>password : {passWord}</h1>
      <button onClick={() => handleDelete(_id)} className="btn-ghost">
        Delete
      </button>
      <br />
      <Link to={`update/${_id}`}>
        <button className="btn-success">Update</button>
      </Link>
    </div>
  );
};

export default Service;