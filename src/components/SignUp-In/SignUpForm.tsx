import { useState } from 'react';
import FormInput from './FormInput';
import SignUpInButton from './SignUp-In-Button';

function SignUpForm() {
  // 입력값 상태 관리
  const [formData, setFormData] = useState({
    username: '',
    useremail: '',
    userpassword: '',
    userpasswordCheck: '',
  });

  // 에러 메시지 상태 관리
  const [errors, setErrors] = useState<Record<string, string>>({});

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 유효성 검사 함수
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const { username, useremail, userpassword, userpasswordCheck } = formData;

    if (username.length < 2) {
      newErrors.username = '2글자 이상 입력해주세요';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(useremail)) {
      newErrors.useremail = '올바른 이메일 형식을 입력해주세요.';
    }

    if (userpassword.length < 6) {
      newErrors.userpassword = '비밀번호는 6자리 이상이어야 합니다.';
    }

    if (userpassword !== userpasswordCheck) {
      newErrors.userpasswordCheck = '비밀번호가 일치하지 않습니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('회원가입 성공:', formData);
      alert('회원가입이 완료되었습니다!');
      setFormData({
        username: '',
        useremail: '',
        userpassword: '',
        userpasswordCheck: '',
      });
      setErrors({});
    }
  };

  return (
    <form id="sign-up-from" className="SignUp-In" onSubmit={handleSubmit}>
      <div>
        <FormInput
          type="text"
          label="이름"
          placeholder="2글자 이상 입력"
          name="username"
          onChange={handleChange}
        />
        {errors.username && (
          <p className="validateMessage">{errors.username}</p>
        )}
      </div>
      <div>
        <FormInput
          type="email"
          label="이메일"
          placeholder="user@company.io"
          name="useremail"
          onChange={handleChange}
        />
        {errors.useremail && (
          <p className="validateMessage">{errors.useremail}</p>
        )}
      </div>
      <div>
        <FormInput
          type="password"
          label="패스워드"
          placeholder="숫자, 영문 조합 6자리 이상 입력"
          name="userpassword"
          onChange={handleChange}
        />
        {errors.userpassword && (
          <p className="validateMessage">{errors.userpassword}</p>
        )}
      </div>
      <div>
        <FormInput
          type="password"
          label="패스워드 확인"
          placeholder="입력한 패스워드 다시 입력"
          name="userpasswordCheck"
          onChange={handleChange}
        />
        {errors.userpasswordCheck && (
          <p className="validateMessage">{errors.userpasswordCheck}</p>
        )}
      </div>
      <SignUpInButton label="회원가입" type="submit" />
    </form>
  );
}

export default SignUpForm;
