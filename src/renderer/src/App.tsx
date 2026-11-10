import { useEffect, useState, type JSX } from 'react'
import { platform } from './platform'
import type { AppInfo } from '@shared/aonread_api'

export default function App(): JSX.Element {
  const [info, setInfo] = useState<AppInfo | null>(null)

  useEffect(() => {
    platform.getAppInfo().then(setInfo)
  }, [])

  return (
    <main>
      <h1>Aonread</h1>
      <p>{info ? `v${info.version} · ${info.platform}` : 'Cargando…'}</p>
    </main>
  )
}
