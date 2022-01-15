import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  videoTitle: string;
  videoDescription: string;
  videoTags: string;
  videoStatus: string;
};
function VideoDetailsEditForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const submitForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex rounded-md m-auto w-full h-full items-center justify-center">
      <form
        className="flex items-center justify-center p-8 w-full m-auto h-full flex-col"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex flex-col max-w-3xl m-auto w-full">
          <label className="label" htmlFor="videoTitle">
            Title
          </label>
          <input
            autoComplete="off"
            className="input"
            placeholder="Enter title"
            {...register("videoTitle", {
              minLength: 20,
              maxLength: 100,
              required: true,
              pattern: /[\w\d\@\.\!\*+?]{3}/,
            })}
            id="videoTitle"
          />
          {errors.videoTitle && (
            <span className="text-red-500">This field is required</span>
          )}

          <label className="label" htmlFor="videoDescription">
            Description
          </label>
          <textarea
            className="input resize-none overflow-auto"
            cols={20}
            placeholder="Enter description"
            rows={10}
            {...register("videoDescription", {
              maxLength: 5000,
              required: false,
              pattern: /[\w\d\@\.\!\*+?]{3}/,
            })}
            id="videoDescription"
          />

          <label className="label" htmlFor="videoTags">
            Tags
          </label>
          <textarea
            placeholder="Enter tags"
            maxLength={400}
            cols={20}
            rows={3}
            className="input resize-none"
            {...register("videoTags")}
            id="videoTags"
          />

          <label className="label" htmlFor="videoStatus">
            Status
          </label>
          <select
            className="input"
            {...register("videoStatus")}
            id="videoStatus"
          >
            <option value="PUBLIC">Public</option>
            <option value="PRIVATE">Private</option>
          </select>

          <div className="flex pt-4 max-w-2xl m-auto w-full items-center justify-between">
            <button className="px-3 outline  outline-1 text-purple-600 text-base font-Roboto py-2">
              cancel
            </button>
            <button
              className="bg-pink-500 text-base font-Roboto py-2 px-4 hover:bg-pink-600 text-white rounded-sm"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default VideoDetailsEditForm;
