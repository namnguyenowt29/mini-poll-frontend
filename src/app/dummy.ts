export interface ApiResponse<T> {
  responseData: T | null;
  isLoading: boolean;
  error: any;
}

export interface PostType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
