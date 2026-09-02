export default function TeamMember({
  name,
  title,
  bio,
}: {
  name: string;
  title: string;
  bio: string[];
}) {
  return (
    <div className="grid gap-8 sm:grid-cols-[200px_1fr] sm:items-start">
      <div className="flex aspect-square items-center justify-center rounded-lg border border-dashed border-navy-800/20 bg-white px-4 text-center text-sm text-navy-800/40">
        Headshot coming soon
      </div>
      <div>
        <h3 className="text-xl font-bold text-navy-900">{name}</h3>
        <p className="text-sm font-medium text-red-600">{title}</p>
        <div className="mt-4 space-y-4 text-navy-800/80">
          {bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
