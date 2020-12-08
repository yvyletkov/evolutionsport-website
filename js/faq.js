
window.addEventListener('load', () => {
    const listOfQuestions = Array.prototype.slice.call(document.querySelectorAll('.ac-label'));
    const findQuestionsPlaceholder = document.getElementById('findQuestions');
    const searchInput = document.querySelector('#searchInput');
    searchInput
        .addEventListener('change', () => {
            findQuestionsPlaceholder.innerHTML = "";
            let findQuestions = listOfQuestions.filter(findQ => findQ.innerHTML.toLowerCase().indexOf(searchInput.value.toLowerCase()) !== -1)
            if (!searchInput.value) findQuestions = []
            findQuestions.forEach((value, key, set) => {
                let answerText = value.parentNode.getElementsByTagName('p')[0];
                findQuestionsPlaceholder.innerHTML += `
                <div class="card mt-2">
                     <div class="card-body" style="min-height: auto;padding-top: 20px;">
                        <h5 class="card-title" style="color:#000">${value.innerHTML}</h5>
                        ${answerText.innerHTML}
                     </div>
                </div>
                `
            })
        })
})