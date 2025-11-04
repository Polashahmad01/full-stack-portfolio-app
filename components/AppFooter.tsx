
export default function AppFooter() {
  return (
    <footer className="px-4 lg:max-w-6xl lg:mx-auto">
      <div className="w-full h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent" />
      <p className="text-xs py-6 text-center">&copy; {new Date().getFullYear()} All Rights Reserved - PolashAhmad</p>
    </footer>
  );
}
