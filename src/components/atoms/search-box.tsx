"use client";

import { FormProvider, useForm, Controller, SubmitHandler, FieldValues } from "react-hook-form";
import { CiSearch } from "react-icons/ci";

export type SaerchBoxProps = {
  placeholder?: string;
};

export interface SearchInput {
  searchInput: string;
}

export const SearchBox = ({ placeholder }: SaerchBoxProps) => {
  const form = useForm({
    mode: "onChange",
  });

  const { handleSubmit, control } = form;
const searchHandler: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...form}>
      <form
        className="shrink-0 w-80 bg-neutral-100 rounded-xl border border-border-100 overflow-hidden px-3.5 py-2.5"
        onSubmit={handleSubmit(searchHandler)}
      >
        <Controller
          name="search"
          control={control}
          render={({ field }) => {
            return (
              <p className="w-full flex items-center gap-x-2">
                <CiSearch className="w-6 h-6 text-muted-200" />
                <>
                  <label htmlFor="search" className="hidden">
                    search
                  </label>
                  <input
                    id="search"
                    className="w-full bg-inherit appearance-none text-xs leading-4 text-muted-200 placeholder:font-light placeholder:text-muted-300 border-none focus:border-transparent focus:outline-0 focus:ring-0"
                    type="text"
                    placeholder={placeholder ? placeholder : ""}
                    aria-label="Search"
                    {...field}
                  />
                </>
              </p>
            );
          }}
        />
      </form>
    </FormProvider>
  );
};

export default SearchBox;
