let savedItems = [];

function saveForLater(title) {
    savedItems.push(title);
    alert(`You have saved ${savedItems.length} item(s) for later.`);
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
}

// Load items into saved list on separate page
function loadSavedItems() {
    const savedList = document.getElementById('savedlist');
    const items = JSON.parse(localStorage.getItem('savedItems')) || [];
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        savedList.appendChild(li);
    });
}

// Like button functionality
function likeItem(button) {
    let count = parseInt(button.getAttribute('data-likes')) || 0;
    count++;
    button.setAttribute('data-likes', count);
    button.textContent = `Like (${count})`;
}

// Comment submission
function submitComment(event) {
    event.preventDefault();
    const commentBox = document.getElementById('userComment');
    if (commentBox.value.trim() !== '') {
        alert('Thanks for your comment!');
        commentBox.value = ''; // Clear the input
    } else {
        alert('Please enter a comment before submitting.');
    }
}

// jQuery: Toggle testimonials
$(document).ready(function() {
    $('#toggleTestimonial').click(function() {
        $('#testimonial').toggle();
    });

    // Dropdown menu
    $("nav ul li").hover(
        function () {
            $(this).find("ul").stop(true, true).slideDown(300);
        }, 
        function () {
            $(this).find("ul").stop(true, true).slideUp(300);
        }
    );

    // Chained animation
    $("#box").click(function () {
        $(this)
            .animate({ height: "200px", opacity: 0.5 }, "slow")
            .animate({ width: "200px", opacity: 1 }, "slow")
            .animate({ height: "100px", opacity: 0.5 }, "slow")
            .animate({ width: "100px", opacity: 1 }, "slow");
    });
});
