import Link from "next/link";

const Layout = () => {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="flex space-x-4 m-auto">
            <Link href="/admin" className="link-hover">
              Admin
            </Link>
            <Link href="/products" className="link-hover">
              Products
            </Link>
            <Link href="/emotion" className="link-hover">
              Emotion
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Layout;
