/**
 * Gets current video time
 */
export const getCurrentTime = (video: HTMLVideoElement) => {
  return Math.round(video.currentTime * 1000)
}
