export default function ServiceCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-navy-800/10 p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-lg font-semibold text-navy-900">{name}</h3>
      <p className="mt-2 text-sm text-navy-800/70">{description}</p>
    </div>
  );
}
