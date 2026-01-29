import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.section) {
      const el = document.getElementById(location.state.section);
      if (el) {
        const navbarHeight = 80; // Your navbar h-20 = 80px
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }, [location]);

  return (
    <section
      id="company-overview"
      className="py-20 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            About Fint
          </h2>

          <p className="mb-4">
            We deliver innovative IT and software solutions.
          </p>

          <ul className="grid grid-cols-2 gap-3">
            {[
              "Operational Excellence",
              "Customer Experience",
              "Modern IT",
              "CMMI Processes",
            ].map((i) => (
              <li
                key={i}
                className="bg-white p-3 shadow rounded text-sm"
              >
                ✓ {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="h-80 bg-slate-200 rounded-xl" />
      </div>
    </section>
  );
}