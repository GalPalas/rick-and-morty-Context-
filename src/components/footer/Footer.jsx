const Footer = () => {
  return (
    <footer className="position-relative bg-light text-center p-3">
      <div className="container align-items-center">
        <p className="lead" style={{ color: "darkcyan" }}>
          Copyright &copy; 2021
        </p>
        <a
          href="/#"
          className="position-absolute bottom-0 end-0 h1 text-info mx-2 p-3"
        >
          <i className="bi bi-arrow-up-circle-fill"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
