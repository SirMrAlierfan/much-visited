import useSWR from "swr";
import { useRouter } from "next/router";
import Loading from "../loading";
import Error from "../error";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Admin = () => {
  const router = useRouter();

  const { data: products, error: productError } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );

  const { data: views, error: viewsError } = useSWR(
    "/api/products/views",
    fetcher
  );

  if (productError || viewsError) return <Error />;
  if (!products || !views) return <Loading />;

  // تابع برای خروجی اکسل
  const exportToExcel = () => {
    const tableData = products.map((item) => ({
      "Product Name": item.title,
      "Much Visited": views[item.id] || 0,
    }));

    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products Data");
    worksheet["!cols"] = [
      { width: 40 }, 
      { width: 15 }, 
    ];
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD format
    const fileName = `products_${formattedDate}.xlsx`;

    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, fileName);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Manage</h1>

      <button
        onClick={exportToExcel}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Download Excel
      </button>

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-4 border">Product Name</th>
            <th className="p-4 border">Much Visited</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr
              key={item.id}
              onClick={() => router.push(`/products/${item.id}`)}
              className="border-b hover:bg-gray-50 cursor-pointer"
            >
              <td className="p-4 border tetx-left">{item.title}</td>
              <td className="p-4 border text-left">{views[item.id] || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
