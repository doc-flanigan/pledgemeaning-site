interface DefinitionCardProps {
  term: string;
  definition: string;
  example?: string;
}

export default function DefinitionCard({
  term,
  definition,
  example,
}: DefinitionCardProps) {
  return (
    <div className="bg-midnight-mid border border-amber/20 rounded-xl p-6">
      <h3 className="text-amber font-bold text-xl mb-2">{term}</h3>
      <p className="text-cream leading-relaxed mb-3">{definition}</p>
      {example && (
        <p className="text-muted text-sm italic border-l-2 border-amber/30 pl-3">
          {example}
        </p>
      )}
    </div>
  );
}
