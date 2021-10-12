import React from 'react'
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'
import NavbarMenu from './NavBar_menu'
import NavBarFriend from './NavBar_friend'
import NavBarProfile from './NavBar_profile'
import SearchBar from './SearchBar'

function NavBar()
{
    return (
    <Disclosure as="nav" className="bg-Banner">
        {({ open }) => (
          <>
            <div className="grid-cols-1 mx-auto pr-6">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                              <XIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                              <MenuAlt1Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </Disclosure.Button>
                    </div>
                  <NavbarMenu />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 -mr-4">
                  <SearchBar />
                <NavBarFriend />
                {/* Profile dropdown */}
                <NavBarProfile />
              </div>
                </div>
            </div>
       </>)}
    </Disclosure>)
}

export default NavBar