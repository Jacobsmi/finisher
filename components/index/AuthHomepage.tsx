import AuthNavbar from "../AuthNavbar";

const AuthHomepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthNavbar />
      <div className="grow flex items-center justify-center">
        Rest of the screen
      </div>
    </div>
  );
};
export default AuthHomepage;
