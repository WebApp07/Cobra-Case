import Link from "next/link";
import MaxWithWrapper from "./MaxWithWrapper";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <MaxWithWrapper>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-6 gap-4">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {year} Developed by{" "}
              <span className="font-semibold text-green-600">
                Amine Zouguig
              </span>
              . All rights reserved.
            </p>
          </div>

          {/* Right Section */}
          <nav className="flex justify-center md:justify-end">
            <ul className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-gray-900 transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:text-gray-900 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-900 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </MaxWithWrapper>
    </footer>
  );
};

export default Footer;