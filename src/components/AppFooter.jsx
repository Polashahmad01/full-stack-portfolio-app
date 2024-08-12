
export default function AppFooter() {
  return (
    <footer className="border-t-[1px] border-solid border-[#454547b3] font-light opacity-60 px-4 lg:px-0">
      <div className="container mx-auto grid grid-rows-1 justify-center items-center">
        <p className="text-sm py-8">&copy; {new Date().getFullYear()} All rights reserved - PolashAhmad</p>
      </div>
    </footer>
  );
}
