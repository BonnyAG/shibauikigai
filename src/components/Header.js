import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Our Mission', href: '/our-mission' },
    { name: 'Services', href: '/services' },
  ]
  
export const Header = () => {
  function comingSoon(e) {
    e.preventDefault();
    alert("Coming Soon!");
  }

    return (
      <Popover>
        <div className="relative px-4 pt-6 sm:px-6 lg:px-4">
          <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="/">
                  <span className="sr-only">Shibuikigai</span>
                  <img
                    alt="Shibuikigai"
                    className="h-20 w-auto sm:h-16"
                    src="/logo_color.png"
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-violet-100 hover:text-violet-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#662483]">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
              <a href="/login" className="font-medium text-[#662483] hover:text-[#B46DD0]">
                Log in
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="h-14 w-auto"
                    src="/logo_color.png"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-violet-100 hover:text-violet-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#662483]">
                    <span className="sr-only">Close main menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-violet-100 hover:text-violet-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="block w-full bg-violet-100 px-5 py-3 text-center font-medium text-violet hover:bg-violet-200"
              >
                Log in
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    )
  }

