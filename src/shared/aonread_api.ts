export interface AppInfo {
  name: string
  version: string
  platform: string
}

export interface AonreadApi {
  getAppInfo(): Promise<AppInfo>
}
