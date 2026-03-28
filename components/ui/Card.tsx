// components/ui/Card.tsx
export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-soft">
      {children}
    </div>
  );
}