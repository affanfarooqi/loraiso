export default function Footer(){
  return (
    <footer className="mt-16 bg-white border-t border-black/5">
      <div className="container py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Loraiso. All rights reserved.</div>
        <div className="opacity-70">Pure as Nature Intended.</div>
      </div>
    </footer>
  );
}
