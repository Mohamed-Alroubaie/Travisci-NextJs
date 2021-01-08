import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: '70vw',
          margin: 'auto',
          paddingTop: '2rem',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
