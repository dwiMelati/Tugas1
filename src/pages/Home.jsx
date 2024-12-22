import { Link } from "react-router-dom";

const featuredNovels = [
  {
    id: 1,
    title: "LEGENDARY",
    image: "../img/a (16).jpeg",
  },
  {
    id: 2,
    title: "Five Feet Apart",
    image: "../img/a (17).jpeg",
  },
  {
    id: 3,
    title: "Princess Of Shadows",
    image: "../img/a (18).jpeg",
  },
  {
    id: 4,
    title: "The Princess Protection Program",
    image: "../img/a (19).jpeg",
  },
  {
    id: 5,
    title: "Harry Potter",
    image: "../img/a (20).jpeg",
  },
  {
    id: 6,
    title: "Alcazar",
    image: "../img/a (21).jpeg",
  },
  {
    id: 7,
    title: "Goihikana",
    image: "../img/a (22).jpeg",
  },
  {
    id: 8,
    title: "The Bridge Home",
    image: "../img/a (23).jpeg",
  },
  {
    id: 9,
    title: "Peter And The Wolf",
    image: "../img/a (24).jpeg",
  },
  {
    id: 10,
    title: "Wolf of Sight",
    image: "../img/a (25).jpeg",
  },
  {
    id: 11,
    title: "A Study Drowning",
    image: "../img/a (26).jpeg",
  },
  {
    id: 12,
    title: "Alone",
    image: "../img/a (27).jpeg",
  },
  {
    id: 13,
    title: "The Wild Girl",
    image: "../img/a (28).jpeg",
  },
  {
    id: 14,
    title: "Risen",
    image: "../img/a (29).jpeg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-pink-700 mb-6">
          Selamat datang di Rekomendasi Novel
        </h1>
        <div className="card p-6 max-w-2xl mx-auto">
          <p className="mb-10">
            Temukan buku favorit Anda berikutnya dengan pilihan novel pilihan kami
            dari berbagai genre.
          </p>
          <p className="mb-10">
            Baik Anda menyukai sastra klasik, fiksi kontemporer, atau rilisan baru
            yang menarik, kami punya sesuatu untuk setiap pembaca.
          </p>
          <p className="mb-10">
            Jelajahi koleksi kami dan temukan bacaan yang sesuai untuk Anda hari
            ini!
          </p>
          <div className="mt-6">
            <Link to="/novels" className="btn">
              Jelajahi Novel
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Novels Section */}
      <div className="mt-12 w-full">
        <h2 className="text-center text-2xl font-semibold text-pink-600 mb-6">
          Rekomendasi Pilihan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredNovels.map((novel) => (
            <div
              key={novel.id}
              className="card bg-white rounded-lg shadow-md overflow-hidden animate-fadeIn transform transition-transform hover:scale-105 hover:shadow-lg duration-500"
            >
              <img
                src={novel.image}
                alt={novel.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-gray-800">
                  {novel.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
