function VideoDetailsEditForm() {
  function submitForm(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form className="p-4 flex flex-col" onSubmit={submitForm}>
        <label className="font-Roboto font-medium" htmlFor="video_title">
          Title
        </label>
        <input
          className="input"
          required
          placeholder="Enter video title"
          type="text"
          name="video_title"
          id="video_title"
          autoComplete="off"
        />
        <label className="font-Roboto font-medium" htmlFor="video_description">
          Description
        </label>
        <textarea
          className="input resize-none scroll-smooth overscroll-y-contain"
          cols={30}
          rows={15}
          placeholder="Enter description"
          id="video_description"
          name="video_description"
          autoComplete="off"
        />
        <label className="font-Roboto font-medium" htmlFor="video_tags">
          Tags
        </label>
        <input
          placeholder="Enter tags"
          className="input"
          type="text"
          name="video_tags"
          id="video_tags"
        />
        <label className="font-Roboto font-medium" htmlFor="status">
          Status
        </label>
        <select
          className="border max-w-3xl font-Roboto font-light py-1 px-2 text-base border-gray-100 outline-none"
          name="status"
          id="status"
        >
          <option value="true">Public</option>
          <option value="false">Private</option>
        </select>
        <div className="flex items-center justify-between py-4">
          <button className=" font-Roboto px-4 underline py-2 w-max outline-none text-purple-600 hover:text-purple-800">
            cancel
          </button>
          <button
            className="bg-pink-500 font-Roboto text-white w-max px-4 py-2 rounded hover:bg-pink-600"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default VideoDetailsEditForm;
