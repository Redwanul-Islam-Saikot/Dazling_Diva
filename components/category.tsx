import { useState } from "react";

const categories = [
  {
    id: 1,
    name: "Sharee",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
  },
  {
    id: 2,
    name: "Three Piece",
    image:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80",
  },
  {
    id: 3,
    name: "Two Piece",
    image:
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&q=80",
  },
  {
    id: 4,
    name: "Hijab",
    image:
      "https://images.unsplash.com/photo-1559583109-3e7968136c99?w=400&q=80",
  },
  {
    id: 5,
    name: "Royal Abaya",
    image:
      "https://images.unsplash.com/photo-1618882805789-a8d403052a42?w=400&q=80",
  },
];

export default function CategorySection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      style={{
        background: "#f0f2f5",
        padding: "32px 16px",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      <style>{`
        .category-wrapper {
          max-width: 1320px;
          margin: 0 auto;
        }

        .category-header {
          background: #ffffff;
          border-radius: 12px;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }

        .category-title {
          font-size: 22px;
          font-weight: 700;
          color: #111;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .category-title em {
          font-style: italic;
          font-weight: 400;
          color: #555;
        }

        .explore-btn {
          background: #f5c800;
          color: #111;
          border: none;
          border-radius: 8px;
          padding: 10px 22px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.18s, transform 0.12s;
          white-space: nowrap;
        }

        .explore-btn:hover {
          background: #e0b800;
          transform: translateY(-1px);
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .category-card {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
          transition: transform 0.2s, box-shadow 0.2s;
          position: relative;
        }

        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.13);
        }

        .card-img-wrap {
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: #f5f5f5;
        }

        .card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.35s ease;
        }

        .category-card:hover .card-img-wrap img {
          transform: scale(1.04);
        }

        .card-label {
          padding: 12px 10px;
          text-align: center;
          font-size: 14px;
          font-weight: 600;
          color: #222;
          border-top: 1px solid #f0f0f0;
          background: #fff;
          letter-spacing: 0.1px;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .category-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Large mobile */
        @media (max-width: 700px) {
          .category-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .category-header {
            padding: 14px 16px;
          }

          .category-title {
            font-size: 18px;
          }

          .explore-btn {
            padding: 8px 16px;
            font-size: 13px;
          }
        }

        /* Small mobile */
        @media (max-width: 420px) {
          .category-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .card-label {
            font-size: 12px;
            padding: 9px 6px;
          }
        }
      `}</style>

      <div className="category-wrapper">
        {/* Header */}
        <div className="category-header">
          <h2 className="category-title">
            Category <em>Section</em>
          </h2>
          <button className="explore-btn">Explore More</button>
        </div>

        {/* Grid */}
        <div className="category-grid">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="category-card"
              onMouseEnter={() => setHovered(cat.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="card-img-wrap">
                <img src={cat.image} alt={cat.name} loading="lazy" />
              </div>
              <div className="card-label">{cat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}