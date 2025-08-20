import { SignIn, useClerk, useUser } from '@clerk/clerk-react'
import React from 'react'

const Sidebar = ({sidebar, setSidebar}) => {

    const {user} = useUser();
    const {signOut, openUserProfile} = useClerk();

  return(
    <div
  className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between
  items-center sm:relative sm:translate-x-0
  max-sm:absolute top-14 bottom-0 left-0
  ${sidebar ? "translate-x-0" : "-translate-x-full"}
  transition-transform duration-300 ease-in-out`}
>
  <div className="my-7 w-full">
    <img
      src={user.imageUrl}
      alt="profile"
      className="w-20 h-20 rounded-full mx-auto"
    />
    <h1 className="mt-2 text-center font-medium">{user.fullName}</h1>
  </div>
</div>
  )
}

export default Sidebar