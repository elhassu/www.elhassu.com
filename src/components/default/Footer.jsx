import Link from "next/link";
import { routes } from "@/lib/Routes";

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition text-daintree-800 dark:text-celeste-300 dark:opacity-60 opacity-80 hover:opacity-100"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none px-16">
        <div className="border-t border-celeste-300 pb-16 pt-10">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-daintree-800">
                {routes.map(({path, label}) => {
                  return (
                    <NavLink href={path} key={path}>
                      {label}
                    </NavLink>
                  )
                })}
              </div>
              <p className="text-sm text-center text-celeste-500">
                &copy; {new Date().getFullYear()} Keelan Vella. All rights
                reserved.
              </p>
            </div>
        </div>
    </footer>
  )
}
