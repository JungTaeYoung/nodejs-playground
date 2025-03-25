/**
 * 지연 함수
 * @param {number} ms 지연 시간
 * @returns {Promise}  프로미스
 */
export function deley(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
