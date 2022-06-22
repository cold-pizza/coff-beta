import { useHistory } from "react-router-dom";

const Login = function () {
    const history = useHistory();
    return (
        <div>
            <h1>Login View</h1>
            <form action="#">
                <input type="text" placeholder="Writing your name..!" />
                <button onClick={() => history.push("/main")} type="button">
                    Go
                </button>
            </form>
        </div>
    );
};

export default Login;
