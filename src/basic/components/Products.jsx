import React, { useEffect, useState } from "react";
import useProducts from "../../hooks/use-product";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });

  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    loading && <div>로딩 중...</div>;
  }, [loading]);

  if (loading) return <p>로딩 중!</p>;

  if (error) return <p>{error}</p>;
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only 🔥 Sale</label>
      <ul>
        {loading && <div>로딩 중...</div>}
        {error && <div>{error}</div>}
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
