//your code here
// ✅ Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded!");

    // ✅ Handle Navbar Click Events
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (event) => {
            console.log(`Navigated to: ${event.target.textContent}`);
        });
    });

    // ✅ Ensure Videos Are Loaded Correctly
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.addEventListener("loadeddata", () => {
            console.log(`Video loaded: ${video.src}`);
        });
    });

    // ✅ Display Alert on Video Click (Example)
    videos.forEach(video => {
        video.addEventListener("click", () => {
            alert("You clicked on a video!");
        });
    });
});
