export default function TeamCard({
  name,
  title,
  bio,
}: {
  name: string;
  title: string;
  bio?: string;
}) {
  return (
    <div className="rounded-lg border border-navy-800/10 p-6">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-navy-800/10 text-lg font-bold text-navy-800">
        {name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <h3 className="text-base font-semibold text-navy-900">{name}</h3>
      <p className="text-sm font-medium text-red-600">{title}</p>
      {bio && <p className="mt-2 text-sm text-navy-800/70">{bio}</p>}
    </div>
  );
}
