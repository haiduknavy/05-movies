import { BtnWrapper, Search } from './GoBackBtn.styled';

export default function GoBackBtn({ data }) {
  return (
    <BtnWrapper>
      <Search to={data}>Go back</Search>
    </BtnWrapper>
  );
}
