const products = [
  {
    id: 1,
    name: "Orange Color Abaya With Lace & Stone Work",
    price: "৳ 10,000.00",
    badge: "New Arrival",
    image: "https://images.unsplash.com/photo-1594938298603-a4a27bdfbf58?w=600&q=80",
  },
  {
    id: 2,
    name: "Brown Georgette Straight Salwar Kameez",
    price: "৳ 8,642.00",
    badge: "New Arrival",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
  },
  {
    id: 3,
    name: "Orange A-Line Tunic With Shrug",
    price: "৳ 10,000.00",
    badge: "New Arrival",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
  },
];

export default function NewArrivals() {
  return (
    <section
      style={{
        background: "#f0f2f5",
        padding: "48px 16px 56px",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      <style>{`
        .na-wrapper {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Heading */
        .na-heading {
          text-align: center;
          margin-bottom: 36px;
        }

        .na-heading h2 {
          font-size: 36px;
          font-weight: 700;
          color: #3b1c5a;
          margin: 0 0 8px;
          letter-spacing: -0.4px;
        }

        .na-heading p {
          font-size: 15px;
          color: #666;
          margin: 0;
        }

        /* Grid */
        .na-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* Card */
        .na-card {
          background: #fff;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.07);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .na-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.13);
        }

        /* Image wrapper */
        .na-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: #e8e0d8;
        }

        .na-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.35s ease;
        }

        .na-card:hover .na-img-wrap img {
          transform: scale(1.04);
        }

        /* Badge */
        .na-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: #f5c800;
          color: #111;
          font-size: 12px;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 999px;
          letter-spacing: 0.2px;
        }

        /* Price tag */
        .na-price {
          position: absolute;
          bottom: 16px;
          right: 16px;
          background: #fff;
          color: #111;
          font-size: 15px;
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          letter-spacing: 0.1px;
        }

        /* Card footer */
        .na-card-footer {
          padding: 14px 16px 18px;
        }

        .na-card-footer h3 {
          margin: 0;
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.4;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .na-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .na-heading h2 {
            font-size: 30px;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .na-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .na-heading h2 {
            font-size: 26px;
          }

          .na-heading p {
            font-size: 13px;
          }

          .na-img-wrap {
            aspect-ratio: 4 / 5;
          }

          .na-price {
            font-size: 14px;
            padding: 7px 13px;
          }

          .na-card-footer h3 {
            font-size: 14px;
          }
        }

        /* Very small mobile */
        @media (max-width: 380px) {
          .na-heading h2 {
            font-size: 22px;
          }
        }
      `}</style>

      <div className="na-wrapper">
        {/* Section heading */}
        <div className="na-heading">
          <h2>New Arrivals</h2>
          <p>Just In Great Product With Great Deal</p>
        </div>

        {/* Product grid */}
        <div className="na-grid">
          {products.map((product) => (
            <div key={product.id} className="na-card">
              <div className="na-img-wrap">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="na-badge">{product.badge}</span>
                <span className="na-price">{product.price}</span>
              </div>
              <div className="na-card-footer">
                <h3>{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}