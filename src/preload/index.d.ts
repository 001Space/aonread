import type { AonreadApi } from '@shared/aonread_api'

declare global {
  interface Window {
    aonread: AonreadApi
  }
}
