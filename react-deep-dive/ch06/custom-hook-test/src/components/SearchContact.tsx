import { useInput, useInputNoSpecialChar } from "../hooks/useInput";

type PropsType = {
  searchByName: (name: string) => void;
};

const SearchContact = ({ searchByName }: PropsType) => {
  const [name, nameChangeHandler] = useInputNoSpecialChar("");

  const searchClickHandler = () => {
    if (name.length >= 1) {
      searchByName(name);
      nameChangeHandler("");
    } else {
      alert("이름은 두글자 이상을 입력해야 합니다.");
    }
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => nameChangeHandler(e)} />
      <button onClick={searchClickHandler}>조회</button>
    </div>
  );
};

export default SearchContact;
