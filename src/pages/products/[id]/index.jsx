import { useEffect, useRef } from "react";
import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import Loading from "@/pages/loading";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const hasSentView = useRef(false);

  const { data, error } = useSWR(
    id ? `https://fakestoreapi.com/products/${id}` : null,
    fetcher
  );

  useEffect(() => {
    if (id && !hasSentView.current) {
      hasSentView.current = true;

      // دریافت آخرین زمان بازدید از localStorage
      const lastViews = JSON.parse(localStorage.getItem("lastViews")) || {};
      const lastViewTime = lastViews[id] || 0;
      const now = Date.now();

      if (now - lastViewTime > 10000) { 
        fetch("/api/products/views", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        })
          .then((res) => res.json())
          .then(() => {
            mutate("/api/products/views");


            localStorage.setItem(
              "lastViews",
              JSON.stringify({ ...lastViews, [id]: now })
            );
          });
      }
    }
  }, [id]);

  if (error) return <p>خطا در دریافت اطلاعات محصول</p>;
  if (!data) return <Loading />;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <img src={data.image} alt={data.title} className="w-48 h-48 mb-4" />
      <p className="text-gray-700">{data.description}</p>
      <p className="text-lg font-semibold mt-2">${data.price}</p>
      <button
        onClick={() => router.back()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        back
      </button>
    </div>
  );
}
