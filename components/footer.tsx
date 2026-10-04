import React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#232730] bg-[#0c0e12]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#768e9d]">
        {/* Item 1: Copyright */}
        <div className="text-center md:text-left">
          © 2026 Max Behzadi. All rights reserved.
        </div>

        {/* Item 2: Direct Email Anchor */}
        <div>
          <a
            href="mailto:maxbehzadi82@gmail.com"
            className="text-[#d99b53] hover:text-[#fcb96e] transition-colors underline-offset-4 hover:underline"
          >
            maxbehzadi82@gmail.com
          </a>
        </div>

        {/* Item 3: Privacy Telemetry Statement */}
        <div className="text-center md:text-right text-[#6b7280]">
          Zero third-party tracking cookies · Privacy-first architecture.
        </div>
      </div>
    </footer>
  );
}
