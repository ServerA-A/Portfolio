"use client"
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Calendar } from "lucide-react";

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div className="flex flex-col p-2 mt-10 w-full" id="meeting">
      <div className="flex flex-col mb-8 text-center items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-4">
          <Calendar className="w-4 h-4 text-primary/70" />
          <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">Book a meeting</span>
        </div>
        <h2 className="text-3xl font-semibold text-primary">Let's Talk</h2>
        <p className="text-primary/50 text-sm mt-3 max-w-md">
          Want to discuss a project, collaboration, or just say hi? Pick a time that works best for you below.
        </p>
      </div>

      <div className="w-full border border-primary/10 rounded-2xl overflow-hidden bg-background shadow-sm hover:shadow-md transition-shadow duration-300">
        <Cal
          calLink="adityya/15min" 
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </div>
  );
}