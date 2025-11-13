interface MobileSideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSideDrawer({
  isOpen,
  onClose,
}: MobileSideDrawerProps) {
  return (
    <section>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm md:hidden"
          aria-label="Close menu"
        />
      )}
      <article
        className={`fixed top-0 left-0 z-50 w-[50vw] bg-black text-white h-screen transition-transform ease-in-out duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        Side Drawer
      </article>
    </section>
  );
}
