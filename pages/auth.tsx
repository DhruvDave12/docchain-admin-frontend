import React, { useContext } from "react";
import AuthHeader from "../components/AuthHeader";
import Login from "../components/Login";
import { AuthContext } from "../context/auth.context";

const Auth = () => {
  const { onLogin } = useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);

  return (
    <div>
      <AuthHeader />
      {!loading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "60%" }}>
            <Login
              onLogin={onLogin}
              loading={loading}
              setLoading={setLoading}
            />
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
			{/* TODO -> REMOVE MARGIN AND SET STYLES */}
          <div style={{ width: "60%", marginTop:120}}>
            <p style={{fontSize:20, fontWeight:'300', textAlign:'center'}}>Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
