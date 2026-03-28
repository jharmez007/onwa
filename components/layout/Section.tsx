// components/layout/Section.tsx
export default function Section({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}