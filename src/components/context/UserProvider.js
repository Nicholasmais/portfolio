const UserProvider = ({ children }) => {
  const routes = ["Home", "Projects", "Contact"];
  return (
    <UserContext.Provider value={{routes}}>
      {children}
    </UserContext.Provider>
  );
};