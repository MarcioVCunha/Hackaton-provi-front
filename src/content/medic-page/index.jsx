import { useParams } from "react-router";
import Header from "../shared/header";

const MedicPage = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
    </>
  )
};

export default MedicPage;