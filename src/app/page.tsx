import React from "react";
import Link from "next/link";
import Editor from "./documents/editor";
import { Button } from "@/components/ui/button";
import { MousePointerClick } from "lucide-react";

const Home = () => {
  return (
    <div>
      <Link
        href="/documents/new"
        className="text-blue-500 text-center block "
        
      >
        <Button className="px-4 py-8 rounded-lg bg-blue-500 text-white transition-all hover:bg-blue-600" variant="destructive">
          Click here to go to the document page
          <MousePointerClick className="ml-2" />
        </Button>
      </Link>
      <Editor />
    </div>
  );
};

export default Home;
