/**
 * @param {Sting} url
 */
export default function navigate(url) {
    window.location.replace(`${window.location.origin}/bug_fixer${url}`);
}
