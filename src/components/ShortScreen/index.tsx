import React, { useEffect, useState } from 'react'
import { invoke } from '@tauri-apps/api'
import { Button } from 'antd'
import style from './index.module.scss'

export default function Sereenshot() {
  const [processes, setProcesses] = useState<any[]>([])
  useEffect(() => {
    (async () => {
      const res: any[] = await invoke('list_process')
      setProcesses(res)
    })();
  }, [])
  const shortScreen = async () => {
    const image = await invoke('shot_window');
    console.log(image)
  }
  return (
    <div>
      <Button onClick={shortScreen}>截屏</Button>
    </div>
  )
}
