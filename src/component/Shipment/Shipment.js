import React, { useContext } from 'react';
import './Shipment.css'
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import userEvent from '@testing-library/user-event';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
  const onSubmit = data => console.log(data);

  console.log(watch("name")); // watch input value by passing the name of it

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input name="name"  defaultValue={loggedInUser.name}  ref={register}  placeholder="Enter your name"/>
      {errors.name &&    <span className="error">This field is required</span>}
      <input name="email"   defaultValue={loggedInUser.email}  ref={register({ required: true })} placeholder="Enter your Email" />
      {errors.email && <span className="error">This field is required</span>}

      <input name="Phone"  ref={register({ required: true })} placeholder="Enter your Phone Number" />
      {errors.Phone && <span className="error">This field is required</span>}

      
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;