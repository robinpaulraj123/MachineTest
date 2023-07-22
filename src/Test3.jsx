import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";

export default function Test3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="m-56">
      <form className="grid grid-rows-1" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("First name", { required: true })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", { required: true })}
        />

        <Button>
          <input type="submit" />
        </Button>
      </form>{" "}
      <span className="ml-5">
        <p>Note: please check it on Console</p>
      </span>
    </div>
  );
}
