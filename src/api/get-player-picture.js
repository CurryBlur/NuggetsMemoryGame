function getPlayerPicture(lastName, firstName) {
    const pullURL = 'https://nba-players.herokuapp.com/players/' + lastName + '/' + firstName;
    
    return fetch(pullURL, {mode:'cors'})
    .then((response) => {
        return response.blob();
    })
    .then((blob) => {
        return URL.createObjectURL(blob);
    })
}

export default getPlayerPicture;