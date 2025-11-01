import React from 'react'
import { SignedOut, SignInButton, SignedIn, SignOutButton, UserButton } from '@clerk/clerk-react'
import { toast } from 'react-hot-toast'
import axiosInstance from '../libs/axios'
const HomePage = () => {
  return (
    
    <div>
      <button className="btn btn-primary" onClick={() => toast.success("Hello")}>click me</button>
      <SignedOut>
        <SignInButton mode="modal">
            <button className="btn btn-primary">Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>
            <button className="btn btn-primary">Logout</button>
        </SignOutButton>
        <UserButton>
            <button className="btn btn-primary">User</button>
        </UserButton>
      </SignedIn>
      
    </div>
  )
}

export default HomePage
