export default function LogoComma({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-4 h-4 md:w-5 md:h-5 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylized comma with a smaller head (half the size) and a thick tail */}
        <path d="M50,25 C40,25 35,35 35,45 C35,55 42,65 52,65 C58,65 65,60 68,55 C68,75 55,90 30,100 L40,95 C60,85 75,75 75,45 C75,35 65,25 50,25 Z" />
      </svg>
    </span>
  );
}
