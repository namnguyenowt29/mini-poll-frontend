export interface ApiResponse<T> {
  responseData: T | null;
  isLoading: boolean;
  error: any;
}

// sample Type, will remove it soon
export interface PostType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
