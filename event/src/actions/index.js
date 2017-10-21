import axios from 'axios';

export const FETCH_FAVORITES = 'FETCH_FAVORITES';

export function fetchFavorites(username) {
  console.log('Fetching favorites');

  // CRAZY SHIT

  var liveUrl = 'https://api.twitch.tv/kraken/streams/';
  var clientId = '3so67xsajt6xysyj3gad5bg1eanhwc';

  try {
    var channelsUrl =
      'https://api.twitch.tv/kraken/users/' + username + '/follows/channels';

    axios({
      method: 'get',
      url: channelsUrl,
      headers: { 'client-id': clientId }
    }).then(function(responseA) {
      console.log(responseA);
      return {
        type: FETCH_FAVORITES,
        payload: responseA // List of channels
      };
    });

    // Redux-promise middleware
  } catch (e) {
    console.log('error');
  }

  // Redux-promise middleware
}

var liveUrl = 'https://api.twitch.tv/kraken/streams/';
var clientId = '3so67xsajt6xysyj3gad5bg1eanhwc';

function channel(streamer, title, streamerPic, live, streamThumbnail) {
  this.streamer = streamer;
  this.title = title;
  this.streamerPic = streamerPic;
  this.live = live;
  this.streamThumbnail = streamThumbnail;
  this.streamerProfile = 'www.twitch.tv/' + this.streamer;
}

async function getFollowedChannels(user) {
  try {
    var channelsUrl =
      'https://api.twitch.tv/kraken/users/' + user + '/follows/channels';

    return await axios({
      method: 'get',
      url: channelsUrl,
      headers: { 'client-id': clientId }
    }).then(async function(responseA) {
      var channelList = [];

      var followCount = responseA.data.follows.length;

      for (var i = 0; i < followCount; i++) {
        var streamer = responseA.data.follows[i].channel.name;
        var title = responseA.data.follows[i].channel.status;
        var streamerPic = responseA.data.follows[i].channel.logo;

        var live = await axios({
          method: 'get',
          url: liveUrl + streamer,
          headers: { 'client-id': clientId }
        }).then(function(responseB) {
          return responseB.data.stream != null;
        });

        var streamThumbnail = await axios({
          method: 'get',
          url: liveUrl + streamer,
          headers: { 'client-id': clientId }
        }).then(function(responseC) {
          if (live) {
            return responseC.data.stream.preview.large;
          } else {
            return responseA.data.follows[i].channel.video_banner;
          }
        });

        var channelEntry = new channel(
          streamer,
          title,
          streamerPic,
          live,
          streamThumbnail
        );
        channelList.push(channelEntry);
      }

      return channelList;
    });
  } catch (e) {
    console.log('error');
  }
}

console.log(getFollowedChannels('richmondr'));
