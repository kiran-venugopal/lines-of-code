const FileSelection = () => {
  const handleChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    const readerPromise = new Promise((resolve) => {
      reader.onload = function (event) {
        const content = event.target.result;
        resolve(content);
      };
    });

    reader.readAsText(file);

    const text = await readerPromise;
    console.log(text.split(`\n`));
  };

  return (
    <section>
      <input
        onChange={handleChange}
        type="file"
        placeholder="Select a file with code"
      />
      <select placeholder="Select language">
        <option value="js">JavaScript</option>
      </select>
    </section>
  );
};

export default FileSelection;
