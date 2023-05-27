import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    return (
      <Component
        navigate={navigate}
        location={location}
        params={params}
        router={{ location, navigate, params }}
        {...props}
      />
    );
  };

  return Wrapper;
};
export default withRouter;
