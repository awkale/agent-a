import { faBars, faMultiply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Disclosure } from '@headlessui/react'
import { Link } from 'gatsby'
import React from 'react'
import logo from '../images/AgentA-red-transparent.png'
import '../styles/nav.css'


export function Nav() {
  return (
    <Disclosure as="nav" className="font-brand">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className=" h-8 w-auto"
                      src={logo}
                      alt="Agent A"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: " text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    to="/what-we-do"
                    activeClassName="border-red"
                    className="inline-flex items-center border-b-4 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    What We Do
                  </Link>
                  <Link
                    to="/work"
                    activeClassName="border-red"
                    className="inline-flex items-center border-b-4  px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Work
                  </Link>
                  <Link
                    to="/agents"
                    activeClassName="border-red"
                    className="inline-flex items-center border-b-4 px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    The Agents
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon icon={faMultiply} className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FontAwesomeIcon icon={faBars} className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50  text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as={Link}
                to="/what-we-do"
                className="block border-l-4  bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                What We Do
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/work"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Work
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/agents"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                The Agents
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
}
