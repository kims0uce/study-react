import { ChangeEvent, useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, changeHandler] as const;
};

const useInputNoSpecialChar = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // 특수문자, 괄호, 점 제거를 위한 정규식, 그리고 eslint 비활성화
    // eslint-disable-next-line
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    setValue(e.target.value.replace(reg, ""));
  };
  return [value, changeHandler] as const;
};

export { useInput, useInputNoSpecialChar };
