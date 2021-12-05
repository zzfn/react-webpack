import { Outlet } from 'react-router-dom';

const CommonLayout = () => {
  return (
    <div>
      <header>通用header</header>
      <Outlet />
      <footer>通用footer</footer>
    </div>
  );
};
export default CommonLayout;
