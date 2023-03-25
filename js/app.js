const loadAdvice = async () => {
    try {
        const url = 'https://api.adviceslip.com/advice';
        const res = await fetch(url);
        const data = await res.json();
        displayAdvice(data);
        // console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

const displayAdvice = data => {
    // console.log(data);
    const { id, advice } = data.slip;
    const adviceContainer = document.getElementById('advice-container');
    adviceContainer.innerText = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border-4 w-11/12 sm:w-11/12 md:w-9/12 lg:w-2/5 mx-auto border-sky-600">
        <div class="p-10 bg-slate-800 mx-auto">
            <div class="bg-slate-600 px-16 py-12 mx-auto rounded-lg">
                <p class="text-center text-xs font-medium text-green-400">Advice #${id}</p>
                <p class="text-2xl text-center font-semibold text-white">"${advice}"
                </p>
                <br>
                <hr class="border-1 border-slate-500">
            </div>
        </div>
    </div>
    `;
    adviceContainer.appendChild(div);
}