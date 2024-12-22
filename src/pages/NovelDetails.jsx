import { useLocation } from "react-router-dom";

export default function NovelDetails() {
  const { state: novel } = useLocation();

  if (!novel) {
    return <p>Novel tidak ditemukan.</p>;
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-4">{novel.title}</h1>
      <img
        src={novel.image}
        alt={novel.title}
        className="w-full max-w-md object-cover mb-4"
      />
      <p className="text-lg font-semibold">Genre: {novel.category.join(", ")}</p>
      <p className="mt-4">{novel.description}</p>
      <p className="mt-4">{novel.Isi}</p>
    </div>
  );
}
