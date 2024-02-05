export default function ChildrenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      it's children
      {children}
    </div>
  );
}
