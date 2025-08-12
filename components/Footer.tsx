export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="container py-6 text-sm text-gray-600">
        <div>
          © {new Date().getFullYear()} NorthPath Strategies •{" "}
          <a href="/privacy" className="underline">
            Privacy
          </a>{" "}
          •{" "}
          <a href="/terms" className="underline">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
