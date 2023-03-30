import Header from 'components/header.component';
import TodosLogic from 'components/todosLogic.component';

const Home = () => (
  <div className="todos">
    <Header />
    <TodosLogic />
  </div>
);

export default Home;
