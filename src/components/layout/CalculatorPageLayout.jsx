export default function CalculatorPageLayout({ 
  data, 
  children, // The actual calculator component
  methodology,
  standards,
  regionalVariations 
}) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{data.h1}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{data.intro}</p>
      </div>

      {/* Calculator Component */}
      {children}

      {/* How to Use - Dynamic */}
      <HowToUseSection data={data.howToUse} />

      {/* Trust building components */}
      <CalculatorMethodology data={methodology} />
      <IndustryStandards data={standards} />
      <RegionalVariations data={regionalVariations} />
    </div>
  );
}