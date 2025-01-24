type PropsType = {
  currentTime: Date;
  changeTime: ({ currentTime }: { currentTime: Date }) => void;
};

const Home = ({ currentTime, changeTime }: PropsType) => {
  return (
    <div className="card card-body">
      <h2>Home</h2>
    </div>
  );
};
export default Home;
