import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();

      // If login is flagged false on the store and redirect to "/login".
      if (!isLoggedIn) {
        Router.replace("/login");
        return null;
      }

      // If login is flagged true we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
