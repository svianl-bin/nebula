import { useClipboard } from '@vueuse/core'

const { copy, copied, isSupported } = useClipboard()

export async function useClipboardUtils(value: string): Promise<void> {
    if (!isSupported) {
        console.log('当前浏览器不支持复制')
        return
    }

    await copy(value)

    if (copied) {
        console.log('复制成功')
    } else {
        console.log('复制失败')
    }
}
