export default function Sidebar({ children, position = 'right' }) {
  const positionClasses = {
    right: 'lg:order-2',
    left: 'lg:order-1'
  };

  return (
    <aside className={`lg:col-span-1 space-y-6 ${positionClasses[position]}`}>
      {children}
    </aside>
  );
}