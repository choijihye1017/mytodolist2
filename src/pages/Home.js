import { useNavigate } from "react-router-dom";
// src/pages/home.js

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1> MY TO DO LIST</h1>
      <button
        onClick={() => {
          navigate("/works");
        }}
      >
        리스트 확인하러 이동
      </button>
    </div>
  );
};

export default Home;
