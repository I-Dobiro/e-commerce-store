import { SignedOut, SignInButton, SignedIn, SignOutButton } from '@clerk/clerk-react'

function App() {
  return (
    <>
      <h1 className='text-red-400'>Welcome to the E-commerce Store</h1>
      <button className="btn btn-primary">Shop Now</button>
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </>
  )
}
export default App
