export default function Card({ children }) {
  return (
    <>
      <div className="glass p-4">
        <div className="card w-64 h-96 sm:w-80 sm:h-80">{children}</div>
      </div>
    </>
  );
}
