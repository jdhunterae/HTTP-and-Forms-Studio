function init() {
    const actions = {
        "google": "https://www.google.com/search",
        "duckDuckGo": "https://duckduckgo.com/",
        "bing": "https://www.bing.com/search",
        "ask": "https://www.ask.com/web",
    };
    const searchForm = document.getElementById("searchForm");

    function setSearchEngine() {
        let checked = document.querySelector("input[name=engine]:checked");
        let terms = document.querySelector("input[name=q]");

        if (checked === null || checked.value == "") {
            return false;
        }
        if (terms.value == "") {
            return false;
        }

        document.forms["searchForm"].setAttribute("action", actions[checked.value]);
        return true;
    }

    searchForm.addEventListener("submit", setSearchEngine);
    return true;
}

window.addEventListener("load", init);