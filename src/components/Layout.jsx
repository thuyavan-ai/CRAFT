import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import {
  Home,
  LayoutDashboard,
  Sparkles,
  ShoppingBag,
  Users,
  UserCircle,
  Settings,
  Globe,
  LogOut,
  Menu,
  X
} from "lucide-react";

import { useApp } from "../context/AppContext";

export default function Layout() {

  const navigate = useNavigate();

  const { language, t } = useApp();

  const [mobileMenu, setMobileMenu] = useState(false);

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  const links = [
    {
      path: "/home",
      label: "home",
      icon: Home
    },
    {
      path: "/dashboard",
      label: "business",
      icon: LayoutDashboard
    },
    {
      path: "/tools",
      label: "aiTools",
      icon: Sparkles
    },
    {
      path: "/marketplace",
      label: "marketplace",
      icon: ShoppingBag
    },
    {
      path: "/network",
      label: "network",
      icon: Users
    }
  ];

  const accountLinks = [
    {
      path: "/profile",
      label: "profile",
      icon: UserCircle
    },
    {
      path: "/settings",
      label: "settings",
      icon: Settings
    },
    {
      path: "/language",
      label: "language",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf7f3]">

      {/* ================= DESKTOP SIDEBAR ================= */}

      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-white border-r z-40 flex-col">

        {/* BRAND */}

        <div className="p-6 border-b">

          <button
            onClick={() => navigate("/home")}
            className="text-left"
          >

            <div className="text-2xl font-black text-[#8e3c21]">
              CRAFTSAATHI AI
            </div>

            <div className="text-xs text-gray-500 mt-1">
              {t("tagline")}
            </div>

          </button>

        </div>


        {/* MAIN MENU */}

        <nav className="flex-1 p-4">

          <div className="text-xs font-bold text-gray-400 uppercase px-3 mb-3">
            {t("mainMenu")}
          </div>

          <div className="space-y-2">

            {links.map((item) => {

              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                      isActive
                        ? "bg-[#f4ded2] text-[#8e3c21] font-bold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >

                  <Icon size={20} />

                  <span>
                    {t(item.label)}
                  </span>

                </NavLink>
              );

            })}

          </div>


          {/* SEPARATOR */}

          <div className="border-t my-6"></div>


          {/* ACCOUNT */}

          <div className="text-xs font-bold text-gray-400 uppercase px-3 mb-3">
            {t("account")}
          </div>

          <div className="space-y-2">

            {accountLinks.map((item) => {

              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                      isActive
                        ? "bg-[#f4ded2] text-[#8e3c21] font-bold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >

                  <Icon size={20} />

                  <span>
                    {t(item.label)}
                  </span>

                </NavLink>
              );

            })}

          </div>

        </nav>


        {/* LANGUAGE + LOGOUT */}

        <div className="p-4 border-t">

          <div className="flex items-center gap-2 px-3 py-2 mb-3 rounded-xl bg-[#f8f3ef]">

            <Globe
              size={18}
              className="text-[#8e3c21]"
            />

            <div>

              <div className="text-xs text-gray-500">
                {t("language")}
              </div>

              <div className="font-bold text-sm">
                {language}
              </div>

            </div>

          </div>


          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition"
          >

            <LogOut size={20} />

            <span>
              {t("logout")}
            </span>

          </button>

        </div>

      </aside>


      {/* ================= MOBILE HEADER ================= */}

      <header className="lg:hidden sticky top-0 z-40 bg-white border-b">

        <div className="flex items-center justify-between px-4 py-4">

          <button
            onClick={() => navigate("/home")}
            className="text-left"
          >

            <div className="font-black text-lg text-[#8e3c21]">
              CRAFTSAATHI AI
            </div>

            <div className="text-[10px] text-gray-500">
              {t("tagline")}
            </div>

          </button>


          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 rounded-xl bg-gray-100"
          >

            {mobileMenu ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}

          </button>

        </div>


        {/* MOBILE MENU */}

        {mobileMenu && (

          <div className="border-t bg-white p-4">

            <div className="space-y-2">

              {links.map((item) => {

                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenu(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl ${
                        isActive
                          ? "bg-[#f4ded2] text-[#8e3c21] font-bold"
                          : "text-gray-600"
                      }`
                    }
                  >

                    <Icon size={20} />

                    {t(item.label)}

                  </NavLink>
                );

              })}


              <div className="border-t my-3"></div>


              {accountLinks.map((item) => {

                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenu(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl ${
                        isActive
                          ? "bg-[#f4ded2] text-[#8e3c21] font-bold"
                          : "text-gray-600"
                      }`
                    }
                  >

                    <Icon size={20} />

                    {t(item.label)}

                  </NavLink>
                );

              })}


              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600"
              >

                <LogOut size={20} />

                {t("logout")}

              </button>

            </div>

          </div>

        )}

      </header>


      {/* ================= PAGE ================= */}

      <main className="lg:ml-64 min-h-screen">

        <Outlet />

      </main>

    </div>
  );
}