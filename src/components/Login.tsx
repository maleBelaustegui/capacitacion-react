import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: null | string;
  userName: string;
  name: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  userName: "",
  name: "",
};

type LoginPayload = {
  name: string;
  userName: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        userName: "",
        name: "",
      };
    case "login":
      const { userName, name } = action.payload;
      return {
        validando: false,
        token: "null123",
        userName,
        name,
      };

    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando, token, userName, name }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        name: "Magdalena",
        userName: "Maleni",
      },
    });
  };


  const logout = () => {
    dispatch({
      type: "logout",
    });
  };


  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">Autenticado com: {userName}</div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
