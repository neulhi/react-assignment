import FormInput from './FormInput';
import SignUpInButton from './SignUp-In-Button';

function SignInForm() {
  return (
    <form id="sign-in-from" className="SignUp-In">
      <FormInput
        type="email"
        label="이메일"
        placeholder="user@company.io"
        name="useremail"
      />
      <FormInput
        type="password"
        label="패스워드"
        placeholder="숫자, 영문 조합 6자리 이상 입력"
        name="userpassword"
      />
      <SignUpInButton label="로그인" type="submit" />
    </form>
  );
}

export default SignInForm;
