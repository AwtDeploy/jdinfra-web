import { Phone } from "lucide-react";

export function StickyContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919642166456"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white/20 transition hover:scale-110"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.93 2.78.93.59 0 1.118-.42 1.39-.99.272-.572.272-1.117.272-1.146 0-.143-.072-.215-.215-.358a8.4 8.4 0 0 1-1.262-.487zM16.13 25.62a9.55 9.55 0 0 1-5.43-1.68l-3.795 1.216 1.232-3.66a9.5 9.5 0 0 1-1.834-5.61c0-5.265 4.285-9.55 9.55-9.55 5.265 0 9.55 4.285 9.55 9.55 0 5.265-4.285 9.55-9.55 9.55zm0-21.1C9.804 4.52 4.62 9.704 4.62 16.03c0 2.063.55 4.07 1.59 5.836L4 28l6.31-2.06a11.41 11.41 0 0 0 5.82 1.59c6.328 0 11.51-5.184 11.51-11.51 0-6.327-5.182-11.51-11.51-11.51z"/>
        </svg>
      </a>
      <a
        href="tel:+919642166456"
        aria-label="Call"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-primary shadow-lg transition hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
