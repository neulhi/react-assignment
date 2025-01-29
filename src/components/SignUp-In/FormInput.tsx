import { useId, type ComponentProps } from 'react';

type FormInputType = ComponentProps<'input'> & {
  label: string;
};

function FormInput({ label, type, ...restProps }: FormInputType) {
  const inputId = useId();

  return (
    <div className="formInput">
      <label htmlFor={inputId}>{label}</label>
      <input type={type} id={inputId} {...restProps} />
    </div>
  );
}

export default FormInput;
