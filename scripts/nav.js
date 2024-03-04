story = document.querySelector(".ourStory")
dropdown = document.querySelector(".dropdown")

story.addEventListener("mouseover", () => {
    const storyRect = story.getBoundingClientRect();

    // Set the dropdown position based on the story position
    dropdown.style.position = "absolute";
    dropdown.style.top = storyRect.bottom + "px";
    dropdown.style.left = storyRect.left + "px";

    dropdown.style.width = storyRect.right-storyRect.left + "px"


    // Add the active class to show the dropdown
    dropdown.classList.add("dropdown-active");
})

document.addEventListener("mousemove", (e) => {
    const storyRect = story.getBoundingClientRect();

    if (dropdown.classList.contains("dropdown-active") && !(e.clientX >= storyRect.left && e.clientX <= storyRect.right && e.clientY >= storyRect.top && e.clientY <= storyRect.bottom+100)) {
        dropdown.classList.remove("dropdown-active")
    }

});