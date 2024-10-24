export default function Card({ children }) {
  return (
    <>
      <div className="w-80 h-96">
        <div className="card">{children}</div>
      </div>
    </>
  );
}
