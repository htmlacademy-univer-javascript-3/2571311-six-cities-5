import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TReviewItem } from '../../types/types';

// Пример API для отправки комментариев на сервер
const postCommentAPI = async (
  commentData: { offerId: string; comment: { comment: string; rating: number } }
): Promise<TReviewItem> => {
  const response = await fetch('/api/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(commentData),
  });

  if (!response.ok) {
    throw new Error('Failed to post comment');
  }

  // Указываем, что возвращаемое значение должно быть типа TReviewItem
  return response.json() as unknown as TReviewItem; // Приведение типа
};

// Создаем асинхронное действие
export const postComment = createAsyncThunk<
  TReviewItem,
  { offerId: string; comment: { comment: string; rating: number } },
  { rejectValue: string }
>(
  'comments/postComment',
  async (commentData, thunkAPI) => {
    try {
      const response = await postCommentAPI(commentData);
      return response; // Теперь TypeScript знает, что возвращается TReviewItem
    } catch (error) {
      return thunkAPI.rejectWithValue('Error');
    }
  }
);

interface CommentState {
  comments: TReviewItem[];
  status: string;
}

const initialState: CommentState = {
  comments: [],
  status: 'idle', // Статус загрузки
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postComment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const newComment: TReviewItem = action.payload;
        state.comments.push(newComment);
      })
      .addCase(postComment.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default commentsSlice.reducer;
