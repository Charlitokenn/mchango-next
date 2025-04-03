"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { set } from "react-hook-form";
import { tree } from "next/dist/build/templates/app-page";
import { LoginIcon } from "../icons";
import Logo from "../logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isLoggedIn, setisLoggedIn] = useState(false);

  const getUser = async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setisLoggedIn(user ? true : false);
  };

  useEffect(() => {
    getUser();
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a
            href="#features"
            className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
          >
            Pricing
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="rounded-lg border-brand-400 text-brand-600 hover:bg-brand-50"
          >
            <Link
              href="/sign-in"
              className="rounded-lg px-5 border-brand-400 text-brand-600 hover:bg-brand-50"
            >
              {isLoggedIn ? (
                "Dashboard"
              ) : (
                <div className="flex gap-1 items-center justify-center">
                  Login <LoginIcon />
                </div>
              )}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg animate-slide-down">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-3 pt-2">
              <Link href="/sign-in" className="cursor-pointer">
                <Button
                  variant="outline"
                  className="w-full rounded-full border-brand-400 text-brand-600 hover:bg-brand-50"
                >
                  {isLoggedIn ? "Dashboard" : "Login"}
                </Button>
              </Link>
              <Button className="w-full rounded-full btn-gradient">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
