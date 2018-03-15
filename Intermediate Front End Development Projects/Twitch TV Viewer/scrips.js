const main = document.querySelector('main');

(function () {
    fetch(`https://api.twitch.tv/kraken/streams/`, {
        headers: {
            "Client-ID": "0cavx0hxtqv3ahra3dtioxnsm575g3"
        }
    })
        .then(response => response.json())
        .then(loadData);

    function loadData(data) {
        data.streams.forEach(function (stream) {
            let htmlContent = `
      <a href="${stream.channel.url}">
        <div class="stream">
          <img src="${stream.channel.logo}">
          <h2 class="channel-name">${stream.channel.display_name}</h2>
          <h3 class="game">${stream.game}</h3>
          <span class="viewers">${stream.viewers} Viewers</span>
          <span class="status">${stream.channel.status}</span>
        </div>
      </a>
      `
            main.insertAdjacentHTML('beforeend', htmlContent);
        });
    }
})();
