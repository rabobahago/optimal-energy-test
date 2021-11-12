import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "../App.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const GridLayout = () => {
  const [gridArray, setGridArray] = useState([
    { i: "grid1", x: 0, y: 0, h: 7, w: 3 },
    { i: "grid2", x: 3, y: 0, h: 2, w: 5 },
    { i: "grid3", x: 3, y: 2, h: 2, w: 4 },
    { i: "grid4", x: 10, y: 0, h: 6, w: 6 }
  ]);
  const [layouts, setLayouts] = useState(null);
  const layoutChange = (layouts, layout) => {
    const passArray = gridArray;
    setLayouts(layout);
    layouts?.map((cordinate) => {
      passArray[Number(cordinate.i)].x = cordinate.x;
      passArray[Number(cordinate.i)].y = cordinate.y;
      passArray[Number(cordinate.i)].width = cordinate.w;
      passArray[Number(cordinate.i)].height = cordinate.h;
      return null;
    });
    setGridArray(passArray);
  };

  const addGrid = () => {
    const j = Math.ceil(Math.random() * 4) + 1;
    const i = Math.ceil(Math.random() * 6) + 1;
    setGridArray([
      ...gridArray,
      {
        i: "grid" + (gridArray.length + 1),
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * j,
        w: 2,
        h: j
      }
    ]);
  };

  const removeGrid = (key) => {
    const filterData = gridArray.filter((data) => data.i !== key);
    setGridArray(filterData);
  };

  return (
    <div>
      <button onClick={() => addGrid()}>Add Grid</button>

      <ResponsiveReactGridLayout
        onLayoutChange={layoutChange}
        // compactType={null} this prop can make the grid to be places anywhere when fully implemented
        // verticalCompact={false} this prop is the original behavior of react grid layout library
        layout={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        preventCollision={false}
        cols={{ lg: 8, md: 8, sm: 4, xs: 2, xxs: 2 }}
        autoSize={true}
        margin={{
          lg: [20, 20],
          md: [20, 20],
          sm: [20, 20],
          xs: [20, 20],
          xxs: [20, 20]
        }}
      >
        {gridArray?.map((grid, index) => {
          return (
            <div
              className="gridItem"
              key={index}
              data-grid={{
                x: grid?.x,
                y: grid?.y,
                w: grid?.w,
                h: grid?.h,
                i: grid.i,
                minW: 2,
                maxW: 18,
                minH: 2,
                maxH: Infinity,
                isDraggable: true,
                isResizable: true
              }}
            >
              <button
                className="removeButton"
                onClick={() => removeGrid(grid.i)}
              >
                x
              </button>
              <div>{grid.i}</div>
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default GridLayout;
