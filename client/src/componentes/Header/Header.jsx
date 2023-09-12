import { Disclosure } from "@headlessui/react";
import logo from "../../multimedia/log.jpg";

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-900 py-2">
      {({ open }) => (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">

            </div>
            <div className="flex items-center">
              <img
                className="h-14 w-auto mx-auto" // Centrar horizontalmente
                src={logo}
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block"></div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
