class Show{

    static allShows() {
        fetch("http://127.0.0.1:3000/shows")
        .then(response => response.json())
        .then(showsTotal => {
            showsTotal.forEach(function(show) {
                API.addShowFilter(show)
            })
        })
    }

}
