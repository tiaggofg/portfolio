import { Planet } from "@phosphor-icons/react";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <section className="text-gray-700 bg-white border-t sm:mt-20 border-neutral-200">
      <div className="container flex flex-col items-center py-8 mx-auto px-7 max-w-7xl sm:flex-row">
        <Planet size={20} />
        <p className="mt-4 text-sm text-neutral-700 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 sm:mt-0">
          © {new Date().getFullYear()} Tiago Godoy
        </p>
        <span className="inline-flex justify-center mt-4 gap-2 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href="https://github.com/tiaggofg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo size={20} className="hover:opacity-50 cursor-pointer" />
          </a>
        </span>
      </div>
    </section>
  );
}
