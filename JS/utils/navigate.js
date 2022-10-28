/**
 * @param {Sting} url
 */
export default function navigate(url) {
    console.log("`${window.location.origin}/bug_fixer${url}`", `${window.location.origin}/bug_fixer${url}`);
    window.location.replace(`${window.location.origin}/bug_fixer${url}`);
}
