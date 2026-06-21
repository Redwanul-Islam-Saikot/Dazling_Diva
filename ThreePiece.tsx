const products = [
  {
    id: 1,
    name: "Orange Color Abaya With Lace & Stone Work",
    priceMin: "৳ 8,642.00",
    priceMax: "৳ 8,642.00",
    save: "Save: ৳ 680.00",
    image: "https://images.unsplash.com/photo-1594938298603-a4a27bdfbf58?w=600&q=80",
  },
  {
    id: 2,
    name: "Orange Color Abaya With Lace & Stone Work",
    priceMin: "৳ 8,642.00",
    priceMax: "৳ 8,642.00",
    save: "Save: ৳ 680.00",
    image: "https://images.unsplash.com/photo-1594938298603-a4a27bdfbf58?w=600&q=80",
  },
  {
    id: 3,
    name: "Orange Color Abaya With Lace & Stone Work",
    priceMin: "৳ 8,642.00",
    priceMax: "৳ 8,642.00",
    save: "Save: ৳ 680.00",
    image: "https://images.unsplash.com/photo-1594938298603-a4a27bdfbf58?w=600&q=80",
  },
  {
    id: 4,
    name: "Orange Color Abaya With Lace & Stone Work",
    priceMin: "৳ 8,642.00",
    priceMax: "৳ 8,642.00",
    save: "Save: ৳ 680.00",
    image: "https://images.unsplash.com/photo-1594938298603-a4a27bdfbf58?w=600&q=80",
  },
];

export default function ThreePiece() {
  return (
    <section
      style={{
        background: "#f0f2f5",
        padding: "32px 16px 48px",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      <style>{`
        .tp-wrapper {
          max-width: 1320px;
          margin: 0 auto;
        }

        /* Header bar */
        .tp-header {
          background: #fff;
          border-radius: 12px;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }

        .tp-header h2 {
          margin: 0;
          font-size: 22px;
          font-weight: 700;
          color: #111;
          letter-spacing: -0.3px;
        }

        .tp-explore-btn {
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

        .tp-explore-btn:hover {
          background: #e0b800;
          transform: translateY(-1px);
        }

        /* Grid */
        .tp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* Card */
        .tp-card {
          background: #fff;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          flex-direction: column;
        }

        .tp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.13);
        }

        /* Image */
        .tp-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: #c8a882;
        }

        .tp-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.35s ease;
        }

        .tp-card:hover .tp-img-wrap img {
          transform: scale(1.04);
        }

        /* Save badge */
        .tp-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: #f5c800;
          color: #111;
          font-size: 12px;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 999px;
          letter-spacing: 0.1px;
          white-space: nowrap;
        }

        /* Card body */
        .tp-card-body {
          padding: 14px 14px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .tp-card-name {
          margin: 0;
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.45;
        }

        .tp-price-row {
          font-size: 13px;
          font-weight: 600;
          color: #333;
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .tp-price-sep {
          color: #888;
          font-weight: 400;
        }

        /* Buttons */
        .tp-btn-row {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }

        .tp-btn-cart {
          flex: 1;
          background: #3b1c5a;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 11px 10px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          transition: background 0.18s, transform 0.12s;
          white-space: nowrap;
        }

        .tp-btn-cart:hover {
          background: #2a1240;
          transform: translateY(-1px);
        }

        .tp-btn-buy {
          flex: 0 0 auto;
          background: #f5c800;
          color: #111;
          border: none;
          border-radius: 8px;
          padding: 11px 16px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.18s, transform 0.12s;
          white-space: nowrap;
        }

        .tp-btn-buy:hover {
          background: #e0b800;
          transform: translateY(-1px);
        }

        /* Tablet */
        @media (max-width: 1100px) {
          .tp-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .tp-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .tp-header h2 {
            font-size: 18px;
          }

          .tp-explore-btn {
            padding: 8px 16px;
            font-size: 13px;
          }

          .tp-card-name {
            font-size: 13px;
          }

          .tp-btn-cart,
          .tp-btn-buy {
            font-size: 12px;
            padding: 9px 8px;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .tp-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .tp-img-wrap {
            aspect-ratio: 4 / 3;
          }

          .tp-btn-row {
            flex-direction: row;
          }
        }
      `}</style>

      <div className="tp-wrapper">
        {/* Header */}
        <div className="tp-header">
          <h2>Three Piece</h2>
          <button className="tp-explore-btn">Explore More</button>
        </div>

        {/* Product Grid */}
        <div className="tp-grid">
          {products.map((product) => (
            <div key={product.id} className="tp-card">
              {/* Image */}
              <div className="tp-img-wrap">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="tp-badge">{product.save}</span>
              </div>

              {/* Body */}
              <div className="tp-card-body">
                <h3 className="tp-card-name">{product.name}</h3>

                <div className="tp-price-row">
                  <span>{product.priceMin}</span>
                  <span className="tp-price-sep">–</span>
                  <span>{product.priceMax}</span>
                </div>

                <div className="tp-btn-row">
                  <button className="tp-btn-cart">
                    <span>🛒</span> Add to Cart
                  </button>
                  <button className="tp-btn-buy">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}