interface Props {
  data?: any;
}

export function HeavyServerComponent({ data }: Props) {
  return (
    <div className="py-16 px-8 bg-green-300/20 flex justify-between items-center">
      <h3 className="text-lg">Heavy Server Component</h3>

      <div
        className="[&>svg]:w-20 [&>svg]:h-20"
        dangerouslySetInnerHTML={{ __html: data }}
      />
    </div>
  );
}
