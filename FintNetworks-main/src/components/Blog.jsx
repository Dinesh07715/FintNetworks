import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function Blog() {
  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        /* Fade-up on load */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          opacity: 0;
          animation: fadeUp 0.9s ease-out forwards;
        }

        /* Section indicator */
        @keyframes moveDotSlow {
          0% { left: 6%; }
          50% { left: 82%; }
          100% { left: 6%; }
        }

        .indicator {
          position: relative;
          width: 140px;
          height: 8px;
          background: #cceedd;
          border-radius: 999px;
          margin: 18px auto 0;
        }

        .indicator span {
          position: absolute;
          top: -5px;
          width: 18px;
          height: 18px;
          background: #e11d48;
          border-radius: 50%;
          animation: moveDotSlow 3.6s ease-in-out infinite;
        }

        /* Read More button (hidden by default) */
        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ef4444;
          color: white;
          padding: 12px 26px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 14px;
          margin-top: 22px;
          opacity: 0;
          transform: translateY(10px);
          pointer-events: none;
          transition: all 0.35s ease;
          text-decoration: none;
        }

        .read-more-btn span {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: white;
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          transition: transform 0.3s ease;
        }

        /* Show button on card hover */
        .blog-card:hover .read-more-btn {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .read-more-btn:hover span {
          transform: rotate(90deg);
        }

        /* Title hover */
        .blog-title {
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .blog-title:hover {
          color: #ef4444;
        }
      `}</style>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              FINT – Techtalk – Blog
            </h2>

            <div className="indicator">
              <span></span>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="blog-card group relative fade-up"
                style={{ animationDelay: `${index * 160}ms` }}
              >
                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-[240px] w-full object-cover"
                  />
                </div>

                {/* Floating content */}
                <div
                  className="relative mx-6 -mt-16 bg-white
                             rounded-2xl p-6
                             shadow-lg
                             transition-all duration-500 ease-out
                             group-hover:-translate-y-2
                             group-hover:shadow-2xl"
                >
                  <p className="text-sm text-gray-500 mb-2">
                    {blog.author} | {blog.date}
                  </p>

                  {/* ✅ TITLE IS NOW CLICKABLE */}
                  <Link to={`/blog/${blog.id}`}>
                    <h3 className="blog-title text-lg font-semibold leading-snug">
                      {blog.title}
                    </h3>
                  </Link>

                  {/* Read More button */}
                  <Link to={`/blog/${blog.id}`} className="read-more-btn">
                    Read More
                    <span>+</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
