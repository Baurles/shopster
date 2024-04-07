export default function CatalogModal({ handleModal }) {
  return (
    <div
      onClick={handleModal}
      className="w-64 h-96 mt-96 rounded-lg bg-white z-10"
    ></div>
  );
}
