import { useEffect } from "react";

const StarfieldBackground = () => {
  useEffect(() => {
    const starContainer = document.getElementById("starfield");

    const numStars = 250;
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${2 + Math.random() * 8}s`;
      star.style.opacity = `${0.2 + Math.random() * 0.8}`;
      starContainer.appendChild(star);
    }
  }, []);

  return (
    <div
      id="starfield"
      className="fixed top-0 left-0 w-full h-full z-[-1] bg-black overflow-hidden"></div>
  );
};

export default StarfieldBackground;
