function VideoDetailsEditForm() {
  return (
    <div>
      <form>
        <label htmlFor="video_title">Title</label>
        <input
          type="text"
          name="video_title"
          id="video_title"
          autoComplete="off"
        />
        <label htmlFor="video_description">Description</label>
        <input
          type="text"
          id="video_description"
          name="video_description"
          autoComplete="off"
        />
        <label htmlFor="video_tags">Tags</label>
        <input type="text" name="video_tags" id="video_tags" />
      </form>
    </div>
  );
}

export default VideoDetailsEditForm;
