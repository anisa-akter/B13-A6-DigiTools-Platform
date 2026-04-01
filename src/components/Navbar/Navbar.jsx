const navItems = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

const Navbar = ({ cartCount, onCartOpen }) => {
  return (
    <header className="bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 md:px-6">
        <h1 className="text-3xl font-black tracking-tight text-transparent bg-linear-to-r from-indigo-500 to-fuchsia-500 bg-clip-text">
          DigiTools
        </h1>

        <ul className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
          {navItems.map((item) => (
            <li key={item} className="cursor-pointer transition hover:text-indigo-600">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            onClick={onCartOpen}
            className="btn btn-ghost btn-sm relative rounded-full border border-slate-200 px-3 text-slate-700 hover:border-indigo-300"
          >
            <span aria-hidden="true">🛒</span>
            <span className="hidden sm:inline">Cart</span>
            <span className="badge badge-sm border-0 bg-indigo-600 text-white">{cartCount}</span>
          </button>
          <button type="button" className="btn btn-ghost btn-sm text-slate-700">
            Login
          </button>
          <button
            type="button"
            className="btn btn-sm rounded-full border-0 bg-linear-to-r from-indigo-600 to-fuchsia-600 px-5 text-white shadow-lg shadow-indigo-200"
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;