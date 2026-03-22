// Only add button if we are on a review page
if (window.location.href.indexOf("grading/view") >= 0) {
    addDownloadButton();
}

function addDownloadButton() {
    const toolbar = document.querySelector('section[role="toolbar"]');
    if (!toolbar) return;

    const btn = document.createElement("button");
    btn.setAttribute('class', 'mdc-top-app-bar__action-item mdc-button mdc-button--white ml-2');
    btn.textContent = "Download";
    btn.addEventListener('click', download);
    toolbar.appendChild(btn);
}

async function download() {
    // New approach: each file tab has a data-url with a presigned download URL
    const fileTabs = document.querySelectorAll('[data-js-file-tab][data-url]');

    if (fileTabs.length > 0) {
        for (const tab of fileTabs) {
            const url = tab.getAttribute('data-url');
            const filename = getFilenameFromUrl(url)
                || tab.querySelector('h2')?.textContent?.trim()
                || 'download.pdf';
            await downloadFile(url, filename);
        }
        return;
    }

    // Legacy fallback: html2pdf for quiz panels
    const generalAnswers = document.querySelectorAll('.quiz-panel');
    if (generalAnswers != null && generalAnswers.length >= 1) {
        for (let i = 0; i < generalAnswers.length; i++) {
            alert("Rendering pdf, this might take a while");
            html2pdf().set({ margin: 2 }).from(generalAnswers[i]).save("ANS-" + document.title + "-" + (i + 1) + ".pdf");
        }
        return;
    }

    alert("ANS Downloader was not able to find the requested content on this page");
}

function getFilenameFromUrl(url) {
    try {
        return new URL(url).searchParams.get('filename');
    } catch {
        return null;
    }
}

async function downloadFile(url, filename) {
    try {
        const res = await fetch(url);
        const blob = await res.blob();
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
    } catch (e) {
        // Fallback: open in new tab so user can save manually
        window.open(url, '_blank');
    }
}
