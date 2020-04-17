export interface Session {
  key: string;
}

export interface LoginComponentState {
  isLoading: boolean;
  error: boolean;
  sessionKey: string;
  sessionResult: Session;
}
