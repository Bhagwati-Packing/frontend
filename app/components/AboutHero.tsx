export default function AboutHero() {
  return (
    <div className="relative h-60 md:h-80 w-full bg-cover bg-center" style={{ backgroundImage: "url('/image/about3.jpg')" }}>
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">About Bhagwati Packing</h1>
        <p className="text-lg md:text-xl text-gray-200 mt-2">Total Packaging Solutions Since 2000</p>
      </div>
    </div>
  );
}