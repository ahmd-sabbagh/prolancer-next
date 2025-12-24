// register DTOs
export interface RegisterPayload {
  full_name: string;
  email: string;
  password: string;
  phone: string;
  user_type: string;
}

export interface User {
  id: number;
  full_name: string;
  email: string;
  phone: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
    token_type: string;
  };
}

export interface RegisterError {
  message: string;
  errors?: Record<string, string[]>;
}
// login DTOs
export interface LoginPayload {
  email: string;
  password: string;
}
export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
    token_type: string;
  };
}
export interface LoginError {
  message: string;
  errors?: Record<string, string[]>;
}

