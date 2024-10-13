import anime from "animejs";
import { useEffect, useState } from "react";

const WaterDropGrid = () => {
  const [gridSize, setGridSize] = useState({ width: 20, height: 20 });

  useEffect(() => {
    const updateGridSize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 450) {
        // below sm breakpoint (xs screen)
        setGridSize({ width: 14, height: 14 });
      } else if (screenWidth >= 450 && screenWidth < 640) {
        // below sm breakpoint
        setGridSize({ width: 18, height: 18 });
      } else if (screenWidth >= 640 && screenWidth < 768) {
        // sm breakpoint
        setGridSize({ width: 18, height: 18 });
      } else if (screenWidth >= 768 && screenWidth < 1024) {
        // md breakpoint
        setGridSize({ width: 20, height: 20 });
      } else {
        // lg breakpoint and above
        setGridSize({ width: 25, height: 25 });
      }
    };

    updateGridSize();

    window.addEventListener("resize", updateGridSize);

    return () => {
      window.removeEventListener("resize", updateGridSize);
    };
  }, []);

  return (
    <div className="relative grid place-content-center p-8">
      <DotGrid gridSize={gridSize} />
    </div>
  );
};

const DotGrid = ({ gridSize }) => {
  const { width: GRID_WIDTH, height: GRID_HEIGHT } = gridSize;

  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group rounded-full p-2 transition-colors hover:bg-secondary-light/10 dark:hover:bg-secondary-dark/10"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-primary-dark/80 to-secondary-dark/80 opacity-50 group-hover:from-tertiary-light group-hover:to-primary-light dark:bg-gradient-to-b dark:from-primary-light/80 dark:to-secondary-light/80 dark:group-hover:from-tertiary-dark dark:group-hover:to-primary-dark"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div onClick={handleDotClick} style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }} className="grid w-fit">
      {dots}
    </div>
  );
};

export default WaterDropGrid;
