const Header = () => {
  return (
    <div className="relative w-full">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/eaa165a3-80a7-44cb-8df6-be1a7e225369/web/IN-en-20260706-TRIFECTA-perspective_2f2fae68-6962-4d52-8cc2-1fe6ef5c6a56_large.jpg"
        alt="header"
        className="w-full object-cover"
      ></img>

      <div className="absolute top-0 px-8 py-2 bg-linear-to-b from-black to-transparent w-full">
        <img
          src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAeuLioOK1ZSC8bQbffYbz1gZFxugAQdkx7UsMvqKDtFJLk3EWkpY-w8IBimYy_0xmg1aTzugh7JDHsGzv6hqIL9_qklFo-PFSH81MwCe9rokU4kGkdki.svg"
          alt="logo"
          className="w-44"
        ></img>
      </div>
    </div>
  );
};

export default Header;
