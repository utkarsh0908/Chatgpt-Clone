import baseApi from "./baseApi";

export const chatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchHistory: build.query({
      query: () => {
        return {
          url: `history`,
          method: "GET",
        };
      },
      providesTags: ["fetchChat"]
    }),
    postText: build.mutation({
      query: (data) => {
        return {
          url: `chat`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["fetchChat"],
    }),
    saveHistory: build.mutation({
      query: (data) => {
        return {
          url: `history`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useFetchHistoryQuery, usePostTextMutation, useSaveHistoryMutation } = chatApi;
