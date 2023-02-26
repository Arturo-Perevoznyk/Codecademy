let accessToken;
const clientId = 'c7ca917f4c4e4dd487683e38a8c91029';
const redirectURI = 'http://localhost:3000/';

const Spotify = {
    getAccessToken: () => {
        // console.log('First line of Spotify.getAccessToken!!')

        if (accessToken) {
            // console.log('accessToken should be true. Its value is' + accessToken)
            return accessToken;
        } 

        // console.log(`AccessToken is ${accessToken}. Reading URL... (Still in Spotify.getAccessToken)`)
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }
        
        // console.log('No match. Calling Spotify Api...')
        window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
    },

    search(term) {
        // accessToken = this.getAccessToken();
        const accessToken = Spotify.getAccessToken();// THIS IS HOW THE GUY WRITE IT IN THE CODECADEMY VIDEO. What's the difference?

        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
            { headers: { 'Authorization': `Bearer ${accessToken}` } })
            .then(response => response.json())
            .then(response => {
                const tracks = response.tracks.items.map(item => {
                    const song = { name: item.name, artist: item.artists[0].name, album: item.album, uri: item.uri, id: item.id };
                    return song;
                });
                return tracks.length === 0 ? '' : tracks;
            })
    },

    savePlayList(name, trackURIs) {
        if (!name || !trackURIs.length) {
            return;
        }
        const accessToken = Spotify.getAccessToken();
        const headers = { headers: { Authorization: `Bearer ${accessToken}` } };
        const userId = "";
    }
}

export default Spotify;