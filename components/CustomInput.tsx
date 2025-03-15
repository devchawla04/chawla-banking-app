import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath } from "react-hook-form";
import { AuthformSchema } from "@/lib/utils";
import { z } from "zod";

const formSchema = AuthformSchema('sign-up')


interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({ name, control, label, placeholder }: CustomInput) => {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label">{label}</FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  type={name === "password" ? "password" : "text"}
                  className="input-class"
                  placeholder={placeholder}
                  {...field}
                />
              </FormControl>
            </div>
            <FormMessage className="form-message mt-2" />
          </div>
        )}
      />
    </>
  );
};

export default CustomInput;
