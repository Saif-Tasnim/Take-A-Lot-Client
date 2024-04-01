import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const ApplyVoucher = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();
  const [isFocused, setIsFocused] = useState(false);

  const onSubmit = (data) => {
    // Handle the form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center gap-5 bg-white px-8 py-12 relative  shadow-sm">
        <label
          htmlFor="voucherCode"
          className={`absolute transition-all duration-300 text-sm ${
            (isFocused || isDirty) && "top-7 left-8 text-red-500"
          }`}
        >
          Enter a gift voucher code
        </label>
        <Controller
          name="voucherCode"
          control={control}
          rules={{
            required: "Voucher code is required",
          }}
          render={({ field }) => (
            <>
              <input
                {...field}
                className={`flex-1 py-2 border-b-2 border-solid outline-none text-sm
                ${field.value ? 'border-blue-500 text-blue-500' : 'border-red-500 text-red-500 hover:bg-slate-300 opacity-70'}`}
                type="text"
                placeholder=" "
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              {errors.voucherCode && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.voucherCode.message}
                </div>
              )}
            </>
          )}
        />
        <button
          type="submit"
          className={`px-5 py-3 rounded text-xs font-medium text-white bg-primary ${
            isDirty || errors.voucherCode ? '' : 'bg-opacity-50 cursor-not-allowed'
          }`}
          disabled={!isDirty || !!errors.voucherCode}
        >
          Apply Voucher
        </button>
      </div>
    </form>
  );
};

export default ApplyVoucher;
