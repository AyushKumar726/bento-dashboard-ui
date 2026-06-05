export default function BentoCard({ title, children }) {
  return (
    <div className="
      bg-white/80
      backdrop-blur-sm
      rounded-3xl
      p-6
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
    ">
      <h2 className="text-xl font-bold mb-4">
        {title}
      </h2>

      {children}
    </div>
  );
}