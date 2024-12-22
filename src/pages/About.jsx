export default function About() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-animate">About</h1>
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto gap-8">
        {/* Bagian Gambar */}
        <div className="w-full md:w-1/3 image-animate">
          <img
            src="public/img/a (20).jpeg"
            alt="About Image"
            className="w-full h-auto rounded-lg shadow-lg"
            style={{ maxWidth: '300px' }}
          />
        </div>

        {/* Bagian Deskripsi */}
        <div className="w-full md:w-2/3">
          <div className="flex flex-col gap-4">
            <p className="text-paragraph">
              Web ini dibuat dikarenakan ada tugas pelatihan React.
            </p>
            <p className="text-paragraph">
              Web ini masih dalam pengembangan dan semoga Anda nyaman.
            </p>
            <p className="text-paragraph">
              Masih banyak fitur yang harus ditambah dan diperbaiki dalam web ini.
            </p>
            <p className="text-paragraph">
              Web ini menayangkan novel-novel yang cukup menarik dan pastinya bakal seru.
            </p>
            <p className="text-paragraph">
              Tetap lihat pemberitahuan tentang web kami; Anda nyaman, saya pun senang.
            </p>
            <p className="text-paragraph">
              Jika tidak ada yang memahami Anda, maka biarkan novel memahami Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
