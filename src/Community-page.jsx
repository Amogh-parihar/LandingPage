import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import contests from "../data/ContestsData";
import contests from "./Discussion-page";

export default function ContestPage() {
  // 🔹 Track global dark mode
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        padding: "32px",
        background: isDark
          ? "linear-gradient(to bottom, #0d0d0d, #1a1a1a)"
          : "linear-gradient(to bottom, #f9fafb, #ffffff)",
        minHeight: "100vh",
        color: isDark ? "white" : "#111827",
        fontFamily: "sans-serif",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <h2
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "40px",
          background: "linear-gradient(90deg,#22c55e,#3b82f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Contests
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          maxWidth: "1000px",
          margin: "0 auto",
          gap: "20px",
          transition: "all 0.3s ease",
        }}
      >
        {contests.map((contest) => (
          <div
            key={contest.id}
            style={{
              background: isDark ? "#1e1e1e" : "#ffffff",
              border: isDark ? "1px solid #2d2d2d" : "1px solid #e5e7eb",
              borderRadius: "16px",
              boxShadow: isDark
                ? "0 4px 10px rgba(0,0,0,0.5)"
                : "0 4px 12px rgba(0,0,0,0.08)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "460px",
              color: isDark ? "#f9fafb" : "#111827",
              transition: "background 0.3s, color 0.3s, box-shadow 0.3s",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                background:
                  contest.gradient || "linear-gradient(90deg,#22c55e,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "12px",
              }}
            >
              {contest.title}
            </h3>

            <p
              style={{
                fontSize: "15px",
                color: isDark ? "#9ca3af" : "#4b5563",
                marginBottom: "16px",
              }}
            >
              {contest.description}
            </p>

            <img
              src={contest.image}
              alt={contest.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "16px",
              }}
            />

            <div
              style={{
                fontSize: "14px",
                color: isDark ? "#d1d5db" : "#374151",
                marginBottom: "16px",
              }}
            >
              <p>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color:
                      contest.status === "Upcoming"
                        ? "#22c55e"
                        : contest.status === "Ongoing"
                        ? "#3b82f6"
                        : "#ef4444",
                  }}
                >
                  {contest.status}
                </span>
              </p>
              <p>
                <strong>Starts:</strong> {contest.starts}
              </p>
              <p>
                <strong>Ends:</strong> {contest.ends}
              </p>
            </div>

            <Link
              to={`/contests/${contest.id}`}
              style={{
                display: "inline-block",
                textAlign: "center",
                background:
                  contest.buttonGradient ||
                  "linear-gradient(90deg,#3b82f6,#9333ea)",
                color: "#fff",
                fontWeight: "bold",
                padding: "12px 18px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              View Contest
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
