import Link from "next/link";

export default function Footer() {
  return (
    <div className="container">
      <div>
        Made by{" "}
        <a
          href="https://x.com/uixmat"
          target="_blank"
          className="font-semibold text-blue-700 transition-all hover:text-purple-500"
        >
          uixmat
        </a>
      </div>
    </div>
  );
}
