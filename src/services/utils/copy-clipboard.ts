export const copyToClipboard = async (text: string) => {
  if (!window?.navigator) return
  await navigator.clipboard.writeText(text)
}
