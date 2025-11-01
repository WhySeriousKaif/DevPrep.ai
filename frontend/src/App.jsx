import "./App.css";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <>
      <h1>welcome</h1>

      <SignedOut>   {/* show sign in button when when the user is signed out in the dashboard */}
      <SignInButton mode="modal">
        <button className="text-3xl font-bold underline">
        login
        </button>
      </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>
      {/* here userbutton u donot need to put in signedIn as it is directly handled by the clerk */}
      <UserButton/>
    </>
  );
}

export default App;
