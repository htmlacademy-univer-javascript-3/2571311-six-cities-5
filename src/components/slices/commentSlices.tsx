import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TReviewItem } from '../../types/types'; 

// Пример API для отправки комментариев на сервер
const postCommentAPI = async (commentData: { offerId: string; comment: { comment: string; rating: number } }) => {
  const response = await fetch(`/api/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(commentData),
  });

  if (!response.ok) {
    throw new Error('Failed to post comment');
  }

  return response.json(); // Возвращаем данные, полученные от сервера
};

// Создаем асинхронное действие
export const postComment = createAsyncThunk(
  'comments/postComment',
  async (commentData: { offerId: string; comment: { comment: string; rating: number } }, thunkAPI) => {
    try {
      const response = await postCommentAPI(commentData);
      return response; // Возвращаем успешный ответ
    } catch (error) {
      return thunkAPI.rejectWithValue('Error'); // В случае ошибки
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
        state.comments.push(action.payload); // Добавляем комментарий в состояние
      })
      .addCase(postComment.rejected, (state, action) => {
        state.status = 'failed';
        console.error(action.payload); // Логируем ошибку
      });
  },
});

export default commentsSlice.reducer;