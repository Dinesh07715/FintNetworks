
export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-primary">FINT</h1>
        <nav className="hidden md:flex gap-6 font-medium text-primary">
          {["About Us","Services","Solutions","Insights","Careers","Contact Us"].map(i=>(
            <div key={i} className="group relative cursor-pointer">
              <span className="group-hover:text-accent">{i}</span>
              {i!=="Contact Us" && (
                <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 p-4 rounded w-56">
                  <p className="text-sm text-gray-600">Menu Item</p>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}
