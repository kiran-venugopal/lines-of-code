import { useFileContext } from "../../../context/fileContextUtils";

const statsKey = {
  code: {
    name: "Code:",
  },
  comments: {
    name: "Comments:",
  },
  blank: {
    name: "Blank:",
  },
};

const StatsView = () => {
  const { fileStats } = useFileContext();

  if (!fileStats) {
    return (
      <section className="text-center my-18">
        <p className="text-sm font-light">
          Select a file to view its line by line analysis
        </p>
      </section>
    );
  }
  return (
    <section className="my-18 mx-auto">
      <div className="flex flex-wrap justify-center gap-4">
        {Object.keys(statsKey).map((key) => (
          <div
            key={key}
            className="relative w-[200px] h-[150px] bg-gray-700 flex justify-center items-center"
          >
            <span className="text-lg absolute top-1 left-1 font-semibold">
              {statsKey[key].name}
            </span>
            <span className="text-6xl font-semibold">{fileStats[key]}</span>
          </div>
        ))}
        <div className="relative w-[200px] h-[150px] bg-gray-700 flex justify-center items-center">
          <span className="text-lg absolute top-1 left-1 font-semibold">
            Total:
          </span>
          <span className="text-6xl font-semibold">
            {Object.keys(fileStats).reduce(
              (acc, key) => acc + fileStats[key],
              0
            )}
          </span>
        </div>
      </div>
    </section>
  );
};

export default StatsView;
