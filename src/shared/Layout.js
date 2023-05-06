import React from "react";

const HeaderStyles = {
  width: "100%",
  background: "#1e2629",
  height: "50px",
  display: "flex",
  alignItems: "center",
  padding: "0px 20px",
  color: "white",
  fontWeight: "600",
};
const FooterStyles = {
  width: "100%",
  height: "50px",
  display: "flex",
  background: "green",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
};

const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "90vh",
};

function Header() {
  return (
    <div style={{ ...HeaderStyles }}>
      <div>My Todo List &nbsp;-</div>
      <div>&nbsp; React</div>
    </div>
  );
}

function Footer() {
  return (
    <div style={{ ...FooterStyles }}>
      <span>by Jejering</span>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ ...layoutStyles }}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
