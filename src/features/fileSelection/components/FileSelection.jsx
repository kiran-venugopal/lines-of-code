import { useFileContext } from "../../../context/fileContextUtils";
import getFileStatsFromText from "../../../utils/file/getFileStatsFromText";

const FileSelection = () => {
  const { setFileStats, selectedLanguage, setSelectedLanguage } =
    useFileContext();

  const handleChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      setFileStats(null);
      return;
    }
    const reader = new FileReader();

    const readerPromise = new Promise((resolve) => {
      reader.onload = function (event) {
        const content = event.target.result;
        resolve(content);
      };
    });

    reader.readAsText(file);

    const text = await readerPromise;
    const stats = getFileStatsFromText(text, selectedLanguage);
    setFileStats(stats);
  };

  const handleLangChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <section>
      <div className="flex gap-4 items-center justify-center mt-18 max-w-[800px] mx-auto">
        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="fileInput">
            Select a file
          </label>
          <input
            className="file:px-4 file:py-2 file:border-0 file:bg-gray-600
         file:font-semibold file:cursor-pointer bg-gray-700 text-sm w-[200px]"
            id="fileInput"
            onChange={handleChange}
            type="file"
            placeholder="file:"
          />
        </div>
        <div className="flex flex-col ">
          <label className="text-sm font-medium" htmlFor="lang">
            Select language
          </label>
          <select
            className="p-2 bg-gray-700 text-sm w-[200px]"
            id="lang"
            onChange={handleLangChange}
            value={selectedLanguage}
          >
            <option value="js">JavaScript</option>
            <option value="python">Python</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default FileSelection;
