export default function Profile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      <div className="card max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-pink-400 to-pink-600 p-6">
          <div className="flex justify-center mb-6">
            <img
              src="public/1.jpg"
              alt="Dwi Putri Melati Sikumbang"
              className="w-[200px] h-[200px] rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
          <h2 className="text-center text-2xl font-semibold text-white">Dwi Putri Melati Sikumbang</h2>
        </div>
        <div className="p-6">
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <span className="font-semibold w-32">Tanggal lahir:</span>
              <span>September 20, 2005</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold w-32">Fakultas:</span>
              <span>Ilmu Komputer</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold w-32">Angkatan PUB:</span>
              <span>22</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold w-32">Hobby:</span>
              <span>Masak</span>
            </li>
          </ul>
          <div className="bg-pink-100 p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Hello</h3>
            <p className="mb-4">Salam kenal ini adalah profil saya.</p>
            <a
              href="mailto:profile@novelrecommendations.com"
              className="text-pink-600 hover:text-pink-700 hover:underline"
            >
              profil@melati.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
