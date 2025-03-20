import useSWR from "swr";
import Link from "next/link";
import Loading from "../loading";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Products() {
  const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);

  if (error) return <p>خطا در دریافت اطلاعات محصولات</p>;
  if (!data) return <Loading />;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">محصولات</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <li key={item.id} className="p-4 bg-gray-100 rounded shadow hover:bg-gray-200 transition">
            <Link href={`/products/${item.id}`} className="text-blue-600 hover:underline">
              <img src={item.image} alt={item.title} className="w-32 h-32 mx-auto mb-2" />
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-lg font-bold">${item.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
