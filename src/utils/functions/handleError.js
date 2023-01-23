const handleError = ({ error, navigate, setUser }) => {
  if (error.response?.status === 401) {
    setUser(null);

    navigate("/");
  }

  console.log(error.response?.data);
};

export default handleError;
