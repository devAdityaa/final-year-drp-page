
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation: React.FC = () => {
  return (
    <header className="border-b bg-white">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <Link to="/" className="text-blue-600 font-bold text-xl">
        CoVRx
        </Link>
        <nav className="flex items-center gap-4">
        <Link to="http://localhost:8081/" className={`transition-all hover:-translate-y-0.5 text-blue-600 font-semibold`}>
            Home
          </Link>
          <Link to="/drug-repurposing" className={`transition-all hover:-translate-y-0.5 text-blue-600 font-semibold`}>
            Drug Repurposing
          </Link>
          <Button asChild variant="outline" className="ml-2">
            <Link to="/documentation">Documentation</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
