import { type ComponentProps } from 'react';

type SignUpInButtonType = ComponentProps<'button'> & {
  label: string;
};

function SignUpInButton({ label, ...restProps }: SignUpInButtonType) {
  return (
    <button className="SignUp-In-Button" {...restProps}>
      {label}
    </button>
  );
}

export default SignUpInButton;
